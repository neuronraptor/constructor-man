import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateMechTypeDto } from './dto/create-mech_type.dto';
import { UpdateMechTypeDto } from './dto/update-mech_type.dto';
import { MechType } from './entities/mech_type.entity';
import { MechException } from 'src/common-error/MechException';

@Injectable()
export class MechTypeService {
  constructor(
    @InjectRepository(MechType) private repository: Repository<MechType>,
  ) {}

  async create(dto: CreateMechTypeDto) {
    await this.assertNotExist(dto);

    const e = new MechType();
    e.code = dto.code;
    e.title = dto.title;
    e.partNumber = dto.partNumber;

    if (dto.parentId) {
      e.parent = await this.findOrNull(dto.parentId);
      if (!e.parent) {
        throw new MechException(
          `Parent type with id=${dto.parentId} not found`,
        );
      }
    }

    try {
      return this.repository.save(e);
    } catch (err) {
      throw new MechException(err.message);
    }
  }

  async assertNotExist(dto: CreateMechTypeDto) {
    if (
      dto.code &&
      (await this.repository.findOne({ where: { code: dto.code } }))
    ) {
      throw new MechException(`Type with code=${dto.code} already exists`);
    }

    if (
      await this.repository.findOne({ where: { partNumber: dto.partNumber } })
    ) {
      throw new MechException(
        `Type with partNumber=${dto.partNumber} already exists`,
      );
    }

    if (
      dto.title &&
      (await this.repository.findOne({ where: { title: dto.title } }))
    ) {
      throw new MechException(`Type with title=${dto.title} already exists`);
    }
  }

  async update(id: number, dto: UpdateMechTypeDto) {
    const e = await this.findOne(id);
    if (e != null && e !== undefined) {
      e.partNumber = dto.partNumber;
      e.title = dto.title;
      e.code = dto.code;
      e.parent = await this.findOrNull(dto.parentId);

      return await this.repository.save(e);
    }

    return new Promise((resolve, reject) => null);
  }

  async findOrNull(id: number): Promise<MechType> {
    if (id != null && id !== undefined) {
      return this.findOne(id);
    }
    return new Promise((resolve, reject) => null);
  }

  findAll(): Promise<MechType[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<MechType | null> {
    return this.repository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
