import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ description: '회의록 제목', example: 'string' })
  @IsString()
  title: string;

  @ApiProperty({ description: '작성 날짜', example: 'date', required: false })
  @IsOptional() 
  @IsDateString() 
  date: string; 
}
