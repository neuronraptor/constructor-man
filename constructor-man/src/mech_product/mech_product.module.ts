import { Module } from '@nestjs/common';
import { MechProductService } from './mech_product.service';
import { MechProductController } from './mech_product.controller';
import { MechProduct } from './entities/mech_product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER } from '@nestjs/core';
import { MechExceptionFilter } from 'src/common-error/MechExceptionFilter';

@Module({
  imports: [TypeOrmModule.forFeature([MechProduct])],
  exports: [MechProductService],
  controllers: [MechProductController],
  providers: [
    MechProductService,
    // , {
    //   provide: APP_FILTER,
    //   useClass: MechExceptionFilter
    // }
  ],
})
export class MechProductModule {}
