import { Schema, Document } from 'mongoose';

export const NoteSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  topic_id: { type: String, required: true },
  class: { type: String },  
  meeting_time: { type: String },  
  facilitator: { type: String }, 
  recorder: { type: String },  
  class_size: { type: Number },  
  absent_students: { type: String },  
  meeting_content: { type: String },  
  meeting_result: { type: String },  
  additional_requests: { type: String },  
});

export interface Note extends Document {
  title: string;
  date: Date;
  topic_id: string;
  class?: string;  
  meeting_time?: string; 
  facilitator?: string;  
  recorder?: string;  
  class_size?: number;  
  absent_students?: string; 
  meeting_content?: string; 
  meeting_result?: string; 
  additional_requests?: string; 
}
