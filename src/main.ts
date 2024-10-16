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
    .addServer('http://localhost:3004/', 'Local environment')
    .addTag('Auth 인증')
    .addTag('Admin 관리자')
    .addTag('teacher 담임교사')
    .addTag('student 학생')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document); 

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3004);
}
bootstrap();
