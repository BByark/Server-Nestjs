import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'meetings' })
export class Meeting extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  class: string;

  @Prop({ required: true })
  date: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
