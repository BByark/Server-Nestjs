// src/notes/notes.service.ts
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
      topic_id: note.topic_id,
      class: note.class,
      meeting_time: note.meeting_time,
      facilitator: note.facilitator,
      recorder: note.recorder,
      class_size: note.class_size,
      absent_students: note.absent_students,
      meeting_content: note.meeting_content,
      meeting_result: note.meeting_result,
      additional_requests: note.additional_requests,
    }));
  }
}
