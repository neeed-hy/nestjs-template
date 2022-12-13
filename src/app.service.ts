import { Injectable } from '@nestjs/common';
import { ErrorRes } from 'util/resWrapper.util';
import { GetExampleDto, PostExampleDto } from './app.dto';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }
  getExample(dto: GetExampleDto) {
    const { id } = dto;
    return ErrorRes({ msg: '错误返回样例', data: { id } });
  }
  postExample(dto: PostExampleDto) {
    const { id } = dto;
    return { id };
  }
}
