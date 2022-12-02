# 后端模板

基于[nest.js](https://nestjs.com/)的后端项目模板。

具备以下功能

- 连接 MongoDB 数据库
- 全局 controller 日志输出
- 全局 controller 层参数校验
- cookie 种植与解析
- Swagger 接口文档
- 默认开启 Cors
- 使用 pnpm

一些命令

```bash
# 建立 module
nest g module cats
# 建立controller
nest g co cats
# 建立services
nest g s cats

# 一键建立crud模板
nest g resource cats
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
