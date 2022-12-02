import { Injectable } from '@nestjs/common';
import { SuccessRes } from 'util/resWrapper.util';
import { GetExampleDto, PostExampleDto } from './app.dto';

@Injectable()
export class AppService {
  getHello() {
    return SuccessRes('Hello World!');
  }
  getExample(dto: GetExampleDto) {
    const { id } = dto;
    return SuccessRes({ id });
  }
  postExample(dto: PostExampleDto) {
    const { id } = dto;
    return SuccessRes({ id });
  }
}
