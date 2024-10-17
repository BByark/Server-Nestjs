import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('BByark API')
    .setDescription('🐤 삐약이 API들')
    .setVersion('v1.0')
    .addServer('http://localhost:3005/', 'Local environment')
    .addTag('인증')
    .addTag('관리자')
    .addTag('교사')
    .addTag('학생')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document); 

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3005);
}
bootstrap();
