import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'teachers' })
export class Teacher extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  class: string;

  @Prop({ required: true })
  year: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
