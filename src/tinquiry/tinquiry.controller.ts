import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TinquiryService } from './tinquiry.service';
import { Teacher } from './schemas/teacher.schema';
import { Meeting } from './schemas/meeting.schema';

@ApiTags('교사 정보')
@Controller('api/teacher')
export class TinquiryController {
  constructor(private readonly tinquiryService: TinquiryService) {}

  @Get(':id')
  @ApiOperation({ summary: '교사 정보 조회 및 관련 회의록 조회' })
  async getTeacher(@Param('id') id: string): Promise<{ teacher: Teacher; meetings: Meeting[] }> {
    return this.tinquiryService.getTeacherById(id);
  }
}
