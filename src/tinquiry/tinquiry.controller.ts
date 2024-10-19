import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TinquiryService } from './tinquiry.service';
import { Teacher } from './schemas/teacher.schema';
import { Meeting } from './schemas/meeting.schema';

@ApiTags('교사')
@Controller('teacher')
export class TinquiryController {
  constructor(private readonly tinquiryService: TinquiryService) {}

  @Get(':id')
  @ApiOperation({ summary: '교사 반에 따른 회의록 조회' })
  async getTeacher(@Param('id') id: string): Promise<{ teacher: Teacher; meetings: Meeting[] | string }> {
    return this.tinquiryService.getTeacherById(id);
  }
}
