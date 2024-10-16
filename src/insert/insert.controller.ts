import { Controller, Post, Body } from '@nestjs/common';
import { InsertService } from './insert.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Note } from './schemas/note.schema'; 

@ApiTags('Admin')
@Controller('admin/insert')
export class InsertController {
  constructor(private readonly insertService: InsertService) {}

  @Post()
  @ApiOperation({ summary: '회의 주제 등록' })
  async create(@Body() createNoteDto: CreateNoteDto) {
    return await this.insertService.create(createNoteDto);
  }
}
