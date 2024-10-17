import { Controller, Get } from '@nestjs/common';
import { NotesService } from './notes.service'; 
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NoteDto } from './dto/note.dto'; 

@ApiTags('Admin 관리자') 
@Controller('/admin/list') 
export class NotesController {
  constructor(private readonly notesService: NotesService) {} 

  @Get() 
  @ApiOperation({ summary: '회의 전체 리스트' }) 
  async getNotes(): Promise<NoteDto[]> {
    return this.notesService.getNotes(); 
  }
}
