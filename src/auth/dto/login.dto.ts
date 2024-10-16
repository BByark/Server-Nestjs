import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: '사용자 이름',
    example: '',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: '비밀번호',
    example: '',
  })
  @IsString()
  password: string;
}
