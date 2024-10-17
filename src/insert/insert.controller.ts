import { Controller, Post, Body } from '@nestjs/common';
import { InsertService } from './insert.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('관리자')
@Controller('admin/insert')
export class InsertController {
  constructor(private readonly insertService: InsertService) {}

  @Post()
  @ApiOperation({ summary: '회의 등록' })
  async create(@Body() createNoteDto: CreateNoteDto) {
    return await this.insertService.create(createNoteDto);
  }
}
