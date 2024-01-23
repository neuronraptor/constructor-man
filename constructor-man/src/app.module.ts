import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommonEntityModule } from './common-entity/common_entity.module';

import { MechComponentModule } from './mech_component/mech_component.module';
import { MechProduct } from './mech_product/entities/mech_product.entity';
import { MechProductModule } from './mech_product/mech_product.module';
import { MechProductComponent } from './mech_product_components/entities/mech_product_component.entity';
import { MechProductComponentsModule } from './mech_product_components/mech_product_components.module';
import { MechTypeModule } from './mech_type/mech_type.module';
import { MechType } from './mech_type/entities/mech_type.entity';
import { MechComponent } from './mech_component/entities/mech_component.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [MechType, MechComponent, MechProduct, MechProductComponent],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CommonEntityModule,
    MechTypeModule,
    MechComponentModule,
    MechProductModule,
    MechProductComponentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
