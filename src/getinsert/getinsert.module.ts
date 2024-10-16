import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GetinsertController } from './getinsert.controller';
import { GetinsertService } from './getinsert.service';
import { NoteSchema } from './schemas/note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]), 
  ],
  controllers: [GetinsertController],
  providers: [GetinsertService],
})
export class GetinsertModule {}
