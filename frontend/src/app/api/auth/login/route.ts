import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    const adminUsername = process.env.ADMIN_USERNAME || 'fill.crm';
    const adminPassword = process.env.ADMIN_PASSWORD || 'fill.crm@123';
    const jwtSecret = process.env.JWT_SECRET || 'supersecretjwtkey123';

    if (username === adminUsername && password === adminPassword) {
      const token = jwt.sign({ username }, jwtSecret, { expiresIn: '1d' });
      return NextResponse.json({ token }, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
