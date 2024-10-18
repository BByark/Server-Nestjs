import { Controller, Post, Body } from '@nestjs/common';
import { InsertService } from './insert.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('관리자')
@Controller('admin/insert')
export class InsertController {
  constructor(private readonly insertService: InsertService) {}

  @Post()
  @ApiOperation({ summary: '회의 등록' })
  async create(@Body() createNoteDto: CreateNoteDto) {
    console.log('Received data:', createNoteDto); 
    try {
      return await this.insertService.create(createNoteDto);
    } catch (error) {
      console.error('Error creating note:', error); 
      throw error; 
    }
  }
}
