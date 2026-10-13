import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: any) {
    const { username, password } = body;
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'password123';

    if (username === adminUsername && password === adminPassword) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1d' });
      return { token };
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
