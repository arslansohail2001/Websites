import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('test');
    
    // Add timestamps
    const document = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await db.collection('contacts').insertOne(document);
    
    return NextResponse.json(
      { message: 'Contact successfully saved', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to save contact:', error);
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    const jwtSecret = process.env.JWT_SECRET || 'supersecretjwtkey123';
    
    try {
      jwt.verify(token, jwtSecret);
    } catch (e) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const client = await clientPromise;
    const db = client.db('test');
    const contacts = await db.collection('contacts').find({}).sort({ createdAt: -1 }).toArray();
    
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
