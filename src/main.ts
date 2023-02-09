import { NestFactory } from '@nestjs/core';
import { video } from './video/video.module';

async function bootstrap() {
  const app = await NestFactory.create(video);
  await app.listen(3000);
}
bootstrap();
