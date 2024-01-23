import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { MechException } from 'src/common-error/MechException';
import { assertNotNullUndefined } from 'src/common-util/assertions';
import { MechComponent } from 'src/mech_component/entities/mech_component.entity';
import { MechComponentService } from 'src/mech_component/mech_component.service';
import { MechProductService } from 'src/mech_product/mech_product.service';
import { DataSource, QueryRunner, Repository } from 'typeorm';
import { CreateMechProductComponentDto } from './dto/create-mech_product_component.dto';
import { MechProductComponent } from './entities/mech_product_component.entity';

@Injectable()
export class MechProductComponentsService {
  constructor(
    @InjectRepository(MechProductComponent)
    private repository: Repository<MechProductComponent>,
    private dataSource: DataSource,
    private productService: MechProductService,
    private componentService: MechComponentService,
  ) {}

  @ApiOperation({ description: 'Proxy method, see Create(...) for details' })
  async installComponent(
    productId: number,
    holderId: number,
    componentId: number,
  ) {
    return this.create(
      new CreateMechProductComponentDto(productId, holderId, componentId),
    );
  }

  @ApiOperation({ description: 'Proxy method, see Create(...) for details' })
  async changeComponent(
    productId: number,
    componentId: number,
    newComponentId: number,
  ): Promise<MechProductComponent> {
    const mpc: MechProductComponent = await this.repository.findOne({
      where: {
        product: { id: productId },
        component: { id: componentId },
      },
    });

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (mpc) {
        await queryRunner.manager.delete(MechProductComponent, mpc.id);
        // await this.repository.delete(mpc.id);
        mpc.component.id = newComponentId;
      }

      const res = await this.createTransactional(
        queryRunner,
        new CreateMechProductComponentDto(
          productId,
          mpc?.holder?.id,
          newComponentId,
        ),
      );
      await queryRunner.commitTransaction();

      return res;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw new MechException(err.message);
    } finally {
      await queryRunner.release();
    }
  }

  @ApiOperation({
    description:
      'Create linking three entities object: Product, Holder component and Child component',
  })
  async createTransactional(
    queryRunner: QueryRunner,
    dto: CreateMechProductComponentDto,
  ): Promise<MechProductComponent> {
    try {
      const e = await this.loadDtoAsObject(dto);

      const res = await queryRunner.manager.save(MechProductComponent, e);

      // await queryRunner.commitTransaction();
      await queryRunner.rollbackTransaction();

      return res;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  @ApiOperation({
    description:
      'Create linking three entities object: Product, Holder component and Child component',
  })
  async create(
    dto: CreateMechProductComponentDto,
  ): Promise<MechProductComponent> {
    const e = await this.loadDtoAsObject(dto);
    const res = await this.repository.save(e);

    return res;
  }

  async loadDtoAsObject(
    dto: CreateMechProductComponentDto,
  ): Promise<MechProductComponent> {
    const e = new MechProductComponent();

    if (dto.productId) {
      e.product = await this.productService.findOne(dto.productId);
      assertNotNullUndefined(
        e.product,
        `Product with id=${dto.productId} not found`,
      );
    }

    e.component = await this.componentService.findOne(dto.componentId);
    assertNotNullUndefined(
      e.component,
      `Component with id=${dto.componentId} not found`,
    );

    // Holder component might be empty for a top level Component
    if (dto.holderId) {
      e.holder = await this.componentService.findOne(dto.holderId);
      assertNotNullUndefined(
        e.holder,
        `Component with id=${dto.holderId} not found to be used as holder`,
      );

      if (e.holder.id === e.component.id) {
        throw new MechException(
          `HolderId=${e.holder.id} and ComponentId=${e.component.id}. Prohibited to install self-cyclic component links`,
        );
      }
    }

    if (!e.product && !e.holder) {
      throw new MechException(`At least product or holder must be specified`);
    }

    const links = await this.repository.find({
      where: {
        component: { id: e.component.id },
        product: { id: e.product?.id },
      },
      relations: {
        component: true,
        holder: true,
        product: true,
      },
    });

    if (links && links.length > 0) {
      const linkListStr = links
        .map(
          (x) =>
            `(ProductId=${x.product?.id || '<null>'}, HolderId=${
              x.holder?.id || '<null>'
            })`,
        )
        .join(',');

      throw new MechException(
        `ComponentId=${e.component.id} already installed into ` + linkListStr,
      );
    }

    const links2 = await this.repository.find({
      where: {
        product: {
          id: e.product?.id,
        },
      },
      relations: {
        component: true,
        holder: true,
        product: true,
      },
    });

    const checkComponentId = dto.componentId;
    let xHolderId = dto.holderId;
    let cycleAttemptFound = false;

    while (xHolderId && xHolderId !== undefined) {
      const he = links2.find((e) => e.component?.id === xHolderId);
      if (he && he !== undefined) {
        xHolderId = he.holder?.id;
        if (xHolderId === checkComponentId) {
          cycleAttemptFound = true;
          break;
        }
      } else {
        break;
      }
    }

    if (cycleAttemptFound) {
      throw new MechException(
        `Circular dependency attempt detected, not allowed`,
      );
    }

    return e;
  }

  async findAllByProduct(productId: number): Promise<MechProductComponent[]> {
    const product = await this.productService.findOne(productId);

    if (product) {
      return this.repository.find({
        where: [{ product: { id: productId } }],
        relations: {
          holder: { type: true },
          component: { type: true },
        },
      });
    }

    throw new MechException(`Product with id = ${productId} not found`);
  }

  productComponentsToComponentTree(
    array: MechProductComponent[],
  ): MechComponent[] {
    const map: { [key: number]: MechComponent } = {};

    array.forEach((node) => {
      const c = node.component;
      map[c.id] = c;
      c.children = [];

      const h = node.holder;
      if (h && h !== undefined) {
        c.holder = { ...h };
        delete c.holder.holder;
        delete c.holder.children;

        if (!map[h.id]) {
          map[h.id] = h;
          h.children = [];
        }
      }
    });

    const tree: MechComponent[] = [];
    Object.values(map).forEach((node) => {
      if (node.holder !== null && node.holder !== undefined) {
        map[node.holder.id].children.push(map[node.id]);
      } else {
        tree.push(map[node.id]);
      }
    });

    Object.values(map).forEach((node) => {
      delete node.holder;
    });

    return tree;
  }

  async findProductComponentTree(productId: number): Promise<MechComponent[]> {
    const components = await this.findAllByProduct(productId);

    if (components && components !== undefined) {
      return this.productComponentsToComponentTree(components);
    }
  }

  findOne(id: number): Promise<MechProductComponent> {
    return this.repository.findOne({ where: [{ id }] });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
