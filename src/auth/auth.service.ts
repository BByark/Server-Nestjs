import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async hashPassword(plainPassword: string): Promise<string> {
    const saltRounds = 10; 
    return await bcrypt.hash(plainPassword, saltRounds);
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username }).exec();

    if (!user) {
      return null;
    }

    const isPasswordHashed = user.password.length > 20;
    let isPasswordMatching = false;

    if (isPasswordHashed) {
      isPasswordMatching = await bcrypt.compare(password, user.password);
    } else {
      isPasswordMatching = password === user.password;

      if (isPasswordMatching) {
        const hashedPassword = await this.hashPassword(password);
        user.password = hashedPassword;
        await user.save(); 
      }
    }

    if (!isPasswordMatching) {
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

  async updateUserPassword(userId: string, plainPassword: string): Promise<void> {
    const hashedPassword = await this.hashPassword(plainPassword); 
    await this.userModel.findByIdAndUpdate(userId, { password: hashedPassword });
  }
}
