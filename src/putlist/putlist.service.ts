import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from '../notes/schemas/note.schema';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class PutlistService {
  constructor(@InjectModel('Note') private noteModel: Model<Note>) {}

  async updateNote(id: string, updateNoteDto: UpdateNoteDto) {
    const note = await this.noteModel.findById(id).exec();
    if (!note) {
      throw new NotFoundException(`Note with id ${id} not found`);
    }

    note.class = updateNoteDto.class;
    note.facilitator = updateNoteDto.facilitator;
    note.recorder = updateNoteDto.recorder;
    note.class_size = updateNoteDto.class_size;
    note.absent_students = updateNoteDto.absent_students;
    note.meeting_content = updateNoteDto.meeting_content;
    note.meeting_result = updateNoteDto.meeting_result;
    note.additional_requests = updateNoteDto.additional_requests;

    return note.save();
  }
}
