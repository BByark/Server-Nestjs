import { Controller, Get } from '@nestjs/common';
import { GetinsertService } from './getinsert.service';
import { ApiTags } from '@nestjs/swagger';
import { NoteDto } from './dto/note.dto'; 

@ApiTags('student 학생')
@Controller('student/insert')
export class GetinsertController {
  constructor(private readonly getinsertService: GetinsertService) {}

  @Get('notes')
  async getNotes(): Promise<NoteDto[]> { 
    return this.getinsertService.getNotes();
  }
}
