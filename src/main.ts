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
    .setVersion('v0.9')
    .addServer('http://localhost:3001/', 'Local environment')
    .addTag('Auth')
    .addTag('Admin')
    .addTag('teacher')
    .addTag('student')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();