import { Module } from '@nestjs/common';
import { InsertController } from './insert.controller';
import { InsertService } from './insert.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from './schemas/note.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]), 
  ],
  controllers: [InsertController],
  providers: [InsertService],
})
export class InsertModule {}
