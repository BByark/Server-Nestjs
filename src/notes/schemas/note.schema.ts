// src/notes/schemas/note.schema.ts
import { Schema, Document } from 'mongoose';

export const NoteSchema = new Schema({
    title: { type: String, required: true },
    topic_id: { type: String, required: true },
    class: { type: String, required: false },  // 선택적 필드
    meeting_time: { type: String, required: false },  // 선택적 필드
    facilitator: { type: String, required: false },  // 선택적 필드
    recorder: { type: String, required: false },  // 선택적 필드
    class_size: { type: Number, required: false },  // 선택적 필드
    absent_students: { type: String, required: false },  // 선택적 필드
    meeting_content: { type: String, required: false },  // 선택적 필드
    meeting_result: { type: String, required: false },  // 선택적 필드
    additional_requests: { type: String, required: false },  // 선택적 필드
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
