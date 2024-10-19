import { Schema, Document } from 'mongoose';

export const NoteSchema = new Schema({
    title: { type: String, required: true },
    topic_id: { type: String, required: true },
    class: { type: String, required: false },  
    meeting_time: { type: String, required: false },  
    facilitator: { type: String, required: false },  
    recorder: { type: String, required: false },  
    class_size: { type: Number, required: false },  
    absent_students: { type: String, required: false },  
    meeting_content: { type: String, required: false },  
    meeting_result: { type: String, required: false },  
    additional_requests: { type: String, required: false },  
});

export interface Note extends Document {
    title: string;
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
