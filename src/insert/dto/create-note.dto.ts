import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  topic_id: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  class?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  meeting_time?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  facilitator?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  recorder?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  class_size?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  absent_students?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  meeting_content?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  meeting_result?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  additional_requests?: string; // 기타 건의 사항
}
