import { Module } from '@nestjs/common';
import { MechTypeService } from './mech_type.service';
import { MechTypeController } from './mech_type.controller';
import { MechType } from './entities/mech_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MechType])],
  exports: [MechTypeService],
  controllers: [MechTypeController],
  providers: [MechTypeService],
})
export class MechTypeModule {}
