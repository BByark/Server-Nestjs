import { Controller, Put, Body, Param } from '@nestjs/common';
import { PutlistService } from './putlist.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateNoteDto } from './dto/update-note.dto'; 

@ApiTags('학생')
@Controller('/student/fix')
export class PutlistController {
  constructor(private readonly putlistService: PutlistService) {}

  @Put(':id')
  @ApiOperation({ summary: '회의 내용 입력' })
  async updateNote(
    @Param('id') id: string,
    @Body() updateNoteDto: UpdateNoteDto, 
  ) {
    return this.putlistService.updateNote(id, updateNoteDto);
  }
}
