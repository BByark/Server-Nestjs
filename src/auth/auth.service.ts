import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).exec();

    if (!user || user.password !== password) {
      return null;
    }

    if (username === 'admin1234') {
      user.role = 'admin'; 
    } else if (username.startsWith('teacher')) {
      user.role = 'teacher'; 
      const year = username.slice(7, 9); 
      const classNum = username.slice(9, 11);
      user.year = year;
      user.class = classNum;
    } else if (username.startsWith('student')) {
      user.role = 'student'; 
      const year = username.slice(7, 9); 
      const classNum = username.slice(9, 11); 
      const leaderFlag = username.slice(11); 
      user.year = year;
      user.class = classNum;
      user.leader = leaderFlag === '1';
      user.sleader = leaderFlag === '2';
    }

    return user; 
  }
}
