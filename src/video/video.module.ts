import { Module } from '@nestjs/common';
import { videoController } from './video.controller';
import { videoService } from './video.service';

@Module({
  imports: [],
  controllers: [videoController],
  providers: [videoService],
})
export class video {
  constructor() {
    console.log('Video Module created');
  }
}
