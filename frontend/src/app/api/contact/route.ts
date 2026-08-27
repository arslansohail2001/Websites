import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

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
