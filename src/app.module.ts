import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { InsertModule } from './insert/insert.module';
import { GetinsertModule } from './getinsert/getinsert.module';
import * as mongoose from 'mongoose';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URL), AuthModule, InsertModule, GetinsertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.NODE_ENV === 'dev' ? true : false;

  configure() {
    console.log('MONGODB_URL:', process.env.MONGODB_URL); 
    mongoose.set('debug', this.isDev);
  }
}
