import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './schemas/teacher.schema'; 

@Injectable()
export class TinquiryService {
  constructor(@InjectModel(Teacher.name) private teacherModel: Model<Teacher>) {}

  async getTeacherById(id: string): Promise<Teacher> {
    const teacher = await this.teacherModel.findOne({ username: id }).exec();

    if (!teacher) {
      throw new NotFoundException('교사를 찾을 수 없습니다.');
    }
    return teacher;
  }
}
