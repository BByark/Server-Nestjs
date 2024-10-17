import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NoteSchema } from './schemas/note.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
