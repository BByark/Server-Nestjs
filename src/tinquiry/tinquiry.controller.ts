import { Controller, Get, Param } from '@nestjs/common';
import { TinquiryService } from './tinquiry.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Teacher } from './schemas/teacher.schema'; 

@ApiTags('교사')
@Controller('teacher')
export class TinquiryController {
  constructor(private readonly tinquiryService: TinquiryService) {}

  @Get(':id')
  @ApiOperation({ summary: '교사 정보 조회' })
  @ApiResponse({ status: 200, description: '교사 정보', type: Teacher })
  async getTeacher(@Param('id') id: string): Promise<Teacher> {
    return this.tinquiryService.getTeacherById(id);
  }
}
