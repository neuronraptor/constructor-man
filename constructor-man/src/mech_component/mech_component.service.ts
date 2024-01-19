import { Injectable } from '@nestjs/common';
import { CreateMechComponentDto } from './dto/create-mech_component.dto';
import { UpdateMechComponentDto } from './dto/update-mech_component.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MechComponent } from './entities/mech_component.entity';
import { Repository } from 'typeorm';
import { MechTypeService } from 'src/mech_type/mech_type.service';
import { MechException } from 'src/common-error/MechException';

@Injectable()
export class MechComponentService {

  constructor(
    @InjectRepository(MechComponent) private repository: Repository<MechComponent>,
    private mechTypeService: MechTypeService) {
  }

  async create(dto: CreateMechComponentDto): Promise<MechComponent> {

    await this.assertIsValid(dto);

    await this.assertNotExist(dto);

    // console.log('creating 0003' + dto);
    const e = new MechComponent();
    e.code = dto.code;
    e.serialNumber = dto.serialNumber;
    e.type = await this.mechTypeService.findOrNull(dto.typeId);

    if (!e.type) {
      throw new MechException(`Requested component type with id=${dto.typeId} not found`);
    }

    // e.title = dto.title;
    // e.description = dto.description;

    return this.repository.save(e);
  }

  assertIsValid(dto: CreateMechComponentDto) {
    if (!dto) {
      throw new MechException("Request cannot be an empty object");
    }

    if (!dto.typeId) {
      throw new MechException("Requested component typeId must be specified");
    }

    if (!dto.serialNumber) {
      throw new MechException("Requested component serialNumber must be specified");
    }
  }

  async update(id: number, dto: UpdateMechComponentDto) {
    const e = await this.findOne(id);
    if (e && e !== undefined) {
      e.serialNumber = dto.serialNumber;
      e.code = dto.code;
      e.type = await this.mechTypeService.findOrNull(dto.typeId);

      return await this.repository.save(e);
    }

    return new Promise((resolve, reject) => null);
  }

  async assertNotExist(dto: CreateMechComponentDto) {
    if (dto.serialNumber && dto.serialNumber !== undefined) {
      if (await this.repository.findOneBy({ serialNumber: dto.serialNumber })) {
        throw new MechException(`Component with serialNumber [${dto.serialNumber}] already exists`);
      }
    }
  }

  findAll(): Promise<MechComponent[]> {
    return this.repository.find({
      relations: {
        type: true
      }
    });
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }

}
