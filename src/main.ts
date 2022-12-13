import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { readJSONSync } from 'fs-extra';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局使用管道,用于controller层参数校验
  app.useGlobalPipes(new ValidationPipe());
  // 处理返回数据格式
  app.useGlobalInterceptors(new TransformInterceptor());
  // cookie解析器
  app.use(cookieParser());
  // 开启CORS
  app.enableCors();
  // swagger配置
  const packageJson = readJSONSync('package.json', 'utf8');
  const swaggerConfig = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();
