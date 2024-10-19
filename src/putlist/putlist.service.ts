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

    note.set(updateNoteDto);

    return note.save();
  }
}

// 요청 양식
// {
//   "class": "24",
//   "facilitator": "string",
//   "recorder": "string",
//   "class_size": 0,
//   "absent_students": "string",
//   "meeting_content": "string",
//   "meeting_result": "string",
//   "additional_requests": "hello"
// }

