import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema({ collection: 'note', versionKey: false })
export class Note {
  @Prop({ required: true })
  title: string;

  @Prop({ type: String, required: true })
  topic_id: string;

  @Prop({ type: String })
  class?: string;

  @Prop({ type: String })
  meeting_time?: string;

  @Prop({ type: String })
  facilitator?: string;

  @Prop({ type: String })
  recorder?: string;

  @Prop({ type: Number })
  class_size?: number;

  @Prop({ type: String })
  absent_students?: string;

  @Prop({ type: String })
  meeting_content?: string;

  @Prop({ type: String })
  meeting_result?: string;

  @Prop({ type: String })
  additional_requests?: string; 
}

export const NoteSchema = SchemaFactory.createForClass(Note);
