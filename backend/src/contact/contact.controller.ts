import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    await this.contactService.create(createContactDto);
    return { success: true, message: 'Message received successfully.' };
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.contactService.findAll();
  }
}
