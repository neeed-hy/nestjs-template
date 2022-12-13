import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { GetExampleDto, PostExampleDto } from './app.dto';
import { AppService } from './app.service';

@ApiTags('基本样例')
@Controller('api/example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }
  @Get('get')
  getExample(@Query() getExampleDto: GetExampleDto) {
    return this.appService.getExample(getExampleDto);
  }
  @Post('post')
  postExample(@Body() postExampleDto: PostExampleDto) {
    return this.appService.postExample(postExampleDto);
  }
  @Get('cookie')
  setCookie(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    // 读取cookie
    const cookie = request.cookies;
    // 设置cookie
    response.cookie('set', 'cookie');
    return cookie;
  }
}
