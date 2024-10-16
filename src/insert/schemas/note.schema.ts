import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema({ collection: 'note', versionKey: false})
export class Note {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Object })
  content: object;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: String })
  author_id: string;

  @Prop({ type: String })
  class: string;

  @Prop({ type: Number })
  year: number;

  @Prop({ type: String })
  topic_id: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
