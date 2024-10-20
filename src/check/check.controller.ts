import { Controller, Get, Put, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CheckService } from './check.service';
import { Meeting } from '../tinquiry/schemas/meeting.schema';
import { Teacher } from '../tinquiry/schemas/teacher.schema';

@ApiTags('교사')
@Controller('teacher')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}

  @Put('/:meetingId')
  @ApiOperation({ summary: '회의록 확인' })
  async confirmMeeting(@Param('meetingId') meetingId: string): Promise<Meeting> {
    return this.checkService.confirmMeetingById(meetingId);
  }
}
