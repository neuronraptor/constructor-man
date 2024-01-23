import { Module } from '@nestjs/common';
import { MechProductComponentsService } from './mech_product_components.service';
import { MechProductComponentsController } from './mech_product_components.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechProductComponent } from './entities/mech_product_component.entity';
import { MechProductModule } from 'src/mech_product/mech_product.module';
import { MechComponentModule } from 'src/mech_component/mech_component.module';
import { APP_FILTER } from '@nestjs/core';
import { MechExceptionFilter } from 'src/common-error/MechExceptionFilter';

@Module({
  imports: [
    TypeOrmModule.forFeature([MechProductComponent]),
    MechProductModule,
    MechComponentModule,
  ],
  controllers: [MechProductComponentsController],
  providers: [
    MechProductComponentsService,
    // {
    //   provide: APP_FILTER,
    //   useClass: MechExceptionFilter
    // }
  ],
})
export class MechProductComponentsModule {}
