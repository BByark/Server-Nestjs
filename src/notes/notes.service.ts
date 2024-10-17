import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';
import { NoteDto } from './dto/note.dto'; 

@Injectable()
export class NotesService { 
  constructor(@InjectModel('Note') private noteModel: Model<Note>) {}

  async getNotes(): Promise<NoteDto[]> {
    const notes = await this.noteModel.find().exec();
    return notes.map(note => ({
      id: note._id.toString(), 
      title: note.title,
      date: note.date.toISOString(),
      topic_id: note.topic_id,
    }));
  }
}
