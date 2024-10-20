import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckService } from './check.service';
import { CheckController } from './check.controller';
import { Meeting, MeetingSchema } from '../tinquiry/schemas/meeting.schema';
import { Teacher, TeacherSchema } from '../tinquiry/schemas/teacher.schema'; 

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
  controllers: [CheckController],
  providers: [CheckService],
})
export class CheckModule {}
