// src/putlist/dto/update-note.dto.ts
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  class?: string;

  @IsOptional()
  @IsString()
  facilitator?: string;

  @IsOptional()
  @IsString()
  recorder?: string;

  @IsOptional()
  @IsNumber()
  class_size?: number;

  @IsOptional()
  @IsString()
  absent_students?: string;

  @IsOptional()
  @IsString()
  meeting_content?: string;

  @IsOptional()
  @IsString()
  meeting_result?: string;

  @IsOptional()
  @IsString()
  additional_requests?: string;
}
