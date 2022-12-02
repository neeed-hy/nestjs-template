import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { DBConfig } from '../DBConfig';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${DBConfig.dbUrl}/${DBConfig.dbName}`, {
      user: DBConfig.dbUser,
      pass: DBConfig.dbPW,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
