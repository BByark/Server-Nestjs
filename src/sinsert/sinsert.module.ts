import { Module } from '@nestjs/common';
import { SinsertController } from './sinsert.controller';
import { SinsertService } from './sinsert.service';

@Module({
  controllers: [SinsertController],
  providers: [SinsertService]
})
export class SinsertModule {}
