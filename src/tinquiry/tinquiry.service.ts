import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './schemas/teacher.schema';
import { Meeting } from './schemas/meeting.schema'; 

@Injectable()
export class TinquiryService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
    @InjectModel(Meeting.name) private meetingModel: Model<Meeting>, 
  ) {}

  async getTeacherById(id: string): Promise<{ teacher: Teacher; meetings: Meeting[] | string }> {
    const teacher = await this.teacherModel.findOne({ username: id }).exec();
    if (!teacher) {
      throw new NotFoundException('등록되지 않은 교사입니다.');
    }

    const meetings = await this.meetingModel.find({ class: teacher.class }).exec();
    
    if (meetings.length === 0) {
      return { teacher, meetings: "회의가 없습니다." };
    }

    const filteredMeetings = meetings.filter(meeting => 
      meeting.title || meeting.topic_id || meeting.date 
    );

    return { teacher, meetings: filteredMeetings };
  }
}
