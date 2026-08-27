import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { connectToDatabase } from '../db';

@Injectable()
export class InternshipService {
  async create(createInternshipDto: any) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('internships');
      const result = await collection.insertOne({
        ...createInternshipDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return result;
    } catch (error) {
      console.error('Error inserting internship:', error);
      throw new InternalServerErrorException('Failed to save internship');
    }
  }

  async findAll() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('internships');
      return await collection.find({}).toArray();
    } catch (error) {
      console.error('Error fetching internships:', error);
      throw new InternalServerErrorException('Failed to fetch internships');
    }
  }
}

