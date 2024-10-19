// src/notes/dto/note.dto.ts
export class NoteDto {
  id: string;
  title: string;
  topic_id: string;
  class?: string;  // 선택적 필드
  meeting_time?: string;  // 선택적 필드
  facilitator?: string;  // 선택적 필드
  recorder?: string;  // 선택적 필드
  class_size?: number;  // 선택적 필드
  absent_students?: string;  // 선택적 필드
  meeting_content?: string;  // 선택적 필드
  meeting_result?: string;  // 선택적 필드
  additional_requests?: string;  // 선택적 필드
}
