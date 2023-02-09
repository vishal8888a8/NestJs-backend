import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VideoInterface } from './interface/video.dto';
import { videoService } from './video.service';

@Controller('videos')
export class videoController {
  constructor(private videoService: videoService) {
    console.log('controller is called');
  }

  @Get()
  getAll(): Array<VideoInterface> {
    return this.videoService.getAllVideos();
  }

  @Get('/:id')
  getById(@Param() params): Array<VideoInterface> {
    return this.videoService.getVideoById(params.id);
  }

  @Post()
  postVideo(@Body() body: VideoInterface): string {
    return this.videoService.addVideo(body);
  }

  @Put('/:id')
  updateVideo(@Body() body: VideoInterface, @Param() param): string {
    return this.videoService.updateById(param.id, body);
  }

  @Delete('/:id')
  deleteByID(@Param() params): Array<VideoInterface> {
    return this.videoService.deleteVideoById(params.id);
  }
}
