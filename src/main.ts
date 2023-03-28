import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // указываем путь с которого будем работать /api
  await app.listen(4000); //указываем порт на котором будем работать
}
bootstrap();
