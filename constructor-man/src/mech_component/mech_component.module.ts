import { Module } from '@nestjs/common';
import { MechComponentService } from './mech_component.service';
import { MechComponentController } from './mech_component.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechComponent } from './entities/mech_component.entity';
import { MechTypeModule } from 'src/mech_type/mech_type.module';

@Module({
  imports: [TypeOrmModule.forFeature([MechComponent]), MechTypeModule],
  exports: [MechComponentService],
  controllers: [MechComponentController],
  providers: [MechComponentService],
})
export class MechComponentModule { }
