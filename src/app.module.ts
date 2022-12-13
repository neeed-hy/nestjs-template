import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ControllerLogger } from './middleware/logger.middleware';
import { DBConfig } from '../DBConfig';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${DBConfig.dbUrl}/${DBConfig.dbName}`, {
      user: DBConfig.dbUser,
      pass: DBConfig.dbPW,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ControllerLogger).forRoutes('api');
  }
}
