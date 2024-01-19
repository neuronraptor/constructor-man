import { Injectable } from '@nestjs/common';
import { CreateMechProductDto } from './dto/create-mech_product.dto';
import { UpdateMechProductDto } from './dto/update-mech_product.dto';
import { MechProduct } from './entities/mech_product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MechException } from 'src/common-error/MechException';

@Injectable()
export class MechProductService {

  constructor(@InjectRepository(MechProduct) private repository: Repository<MechProduct>) { }

  async create(dto: CreateMechProductDto): Promise<MechProduct> {
    await this.assertNotExist(dto);

    const e = new MechProduct();
    e.code = dto.code;
    e.title = dto.title;
    e.description = dto.description;

    return this.repository.save(e);
  }

  private async assertNotExist(dto: CreateMechProductDto) {
    if (dto.code && dto.code !== undefined) {
      let e = await this.repository.findOneBy({ code: dto.code });
      if (e) {
        throw new MechException(`Product with code ${dto.code} already exists`);
      }
    }
  }

  findAll(): Promise<MechProduct[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<MechProduct> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateMechProductDto) {
    let e = await this.findOne(id);
    if (e && e !== undefined) {
      e.title = dto.title;
      e.code = dto.code;
      e.description = dto.description;

      return await this.repository.save(e);
    }

    return new Promise((resolve, reject) => null);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }

}

