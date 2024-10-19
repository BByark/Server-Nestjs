import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PutlistController } from './putlist.controller';
import { PutlistService } from './putlist.service';
import { NoteSchema } from '../notes/schemas/note.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]),
  ],
  controllers: [PutlistController],
  providers: [PutlistService],
})
export class PutlistModule {}
