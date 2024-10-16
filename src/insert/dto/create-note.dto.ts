import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ description: '제목 (title)', example: 'string' })
  @IsString()
  title: string;

  @ApiProperty({ description: '날짜 (date)', example: 'date', required: false })
  @IsOptional() 
  @IsDateString() 
  date: string; 
  
  @ApiProperty({ description: '토픽 ID (topic_id)', example: 'topic_id', required: false })
  @IsOptional()
  @IsString()
  topic_id: string; 
}
