import { Schema, Document } from 'mongoose';

export const NoteSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  topic_id: { type: String, required: true },
});

export interface Note extends Document {
  title: string;
  date: Date;
  topic_id: string;
}
