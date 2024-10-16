import { Controller, Get } from '@nestjs/common';
import { GetinsertService } from './getinsert.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('student 학생') 
@Controller('student/form')
export class GetinsertController {
  constructor(private readonly getinsertService: GetinsertService) {}

  @Get()
  getHello(): string {
    return this.getinsertService.getHello();
  }
}
