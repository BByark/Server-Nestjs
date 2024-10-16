import { Module } from '@nestjs/common';
import { GetinsertController } from './getinsert.controller';
import { GetinsertService } from './getinsert.service';

@Module({
  controllers: [GetinsertController],
  providers: [GetinsertService],
})
export class GetinsertModule {}
