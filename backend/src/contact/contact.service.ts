import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { connectToDatabase } from '../db';

@Injectable()
export class ContactService {
  async create(createContactDto: CreateContactDto) {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('contacts');
      const result = await collection.insertOne({
        ...createContactDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return result;
    } catch (error) {
      console.error('Error inserting contact:', error);
      throw new InternalServerErrorException('Failed to save contact');
    }
  }

  async findAll() {
    try {
      const db = await connectToDatabase();
      const collection = db.collection('contacts');
      return await collection.find({}).toArray();
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw new InternalServerErrorException('Failed to fetch contacts');
    }
  }
}
