import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';  
import { AuthModule } from './auth/auth.module';
import { InsertModule } from './insert/insert.module';
import { GetinsertModule } from './getinsert/getinsert.module';
import { NotesModule } from './notes/notes.module';
import { TinquiryModule } from './tinquiry/tinquiry.module';
import { PutlistModule } from './putlist/putlist.module';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';  

dotenv.config(); 

@Module({
  imports: [
    ConfigModule.forRoot({   
      isGlobal: true,  
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),  
    AuthModule,
    InsertModule,
    GetinsertModule,
    NotesModule,
    TinquiryModule,
    PutlistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.NODE_ENV === 'dev';

  configure() {
    console.log('MONGODB_URI:', process.env.MONGODB_URI);
    mongoose.set('debug', this.isDev);
  }
}
