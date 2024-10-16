import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: '이름(username)',
    example: '',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: '비밀번호(password)',
    example: '',
  })
  @IsString()
  password: string;
}
