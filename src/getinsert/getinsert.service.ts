import { Injectable } from '@nestjs/common';

@Injectable()
export class GetinsertService {
  getHello(): string {
    return 'Hello from GetInsert!';
  }
}
