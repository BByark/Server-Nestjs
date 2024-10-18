import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class InsertService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    if (!createNoteDto.title || !createNoteDto.topic_id) {
      throw new BadRequestException('Title and topic_id are required');
    }

    const newNote = new this.noteModel(createNoteDto);
    return newNote.save();
  }
}
