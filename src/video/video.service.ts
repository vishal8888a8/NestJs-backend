import { Injectable } from '@nestjs/common';
import { static_data } from './data/video.static';
import { VideoInterface } from './interface/video.dto';

@Injectable()
export class videoService {
  public VideoList: Array<VideoInterface>;

  constructor() {
    console.log('video service imported');
    this.VideoList = static_data;
  }

  getAllVideos() {
    return this.VideoList;
  }

  getVideoById(id: string): VideoInterface[] {
    return this.VideoList.filter((item: VideoInterface) => item.id === id);
  }

  addVideo(video: VideoInterface): string {
    this.VideoList.push(video);
    return 'Data added!';
  }

  deleteVideoById(id: string): VideoInterface[] {
    this.VideoList = this.VideoList.filter(
      (item: VideoInterface) => item.id !== id,
    );
    return this.VideoList;
  }

  updateById(id: string, video: VideoInterface): string {
    let idx: number = this.VideoList.findIndex(
      (item: VideoInterface) => item.id === id,
    );
    if (idx === -1) return 'Video with given ID not found!';
    else {
      this.VideoList[idx] = video;
      return 'Video updated succesfully';
    }
  }
}
