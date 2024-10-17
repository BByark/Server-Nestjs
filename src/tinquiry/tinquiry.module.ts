import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TinquiryController } from './tinquiry.controller';
import { TinquiryService } from './tinquiry.service';
import { Teacher, TeacherSchema } from './schemas/teacher.schema'; 
import { Meeting, MeetingSchema } from './schemas/meeting.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
  controllers: [TinquiryController],
  providers: [TinquiryService],
})
export class TinquiryModule {}
