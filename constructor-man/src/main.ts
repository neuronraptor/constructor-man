import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MechExceptionFilter } from './common-error/MechExceptionFilter';
import { MechDbExceptionFilter } from './common-error/MechDbExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new MechExceptionFilter(), new MechDbExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Construction manager App')
    .setDescription('The Construction manager App API description')
    .setVersion('1.0')
    .addTag('constructor-man')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
