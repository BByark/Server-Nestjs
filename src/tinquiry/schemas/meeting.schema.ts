import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'note' })
export class Meeting extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  topic_id: string; 

  @Prop({ required: false }) 
  content?: string;

  @Prop({ required: true })
  class: string;

  @Prop({ required: false }) 
  date?: Date; 

  @Prop({ default: false }) 
  confirmed: boolean;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
