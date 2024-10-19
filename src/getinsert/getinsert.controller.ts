import { Controller, Get } from '@nestjs/common';
import { GetinsertService } from './getinsert.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NoteDto } from './dto/note.dto'; 

@ApiTags('학생')
@Controller('student')
export class GetinsertController {
  constructor(private readonly getinsertService: GetinsertService) {}

  @Get('insertlist')
  @ApiOperation({ summary: '관리자가 적어놓은 내용 가져오기' }) 
  async getNotes(): Promise<NoteDto[]> { 
    return this.getinsertService.getNotes();
  }
}
