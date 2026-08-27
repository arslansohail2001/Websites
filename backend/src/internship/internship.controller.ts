import { Controller, Get, Post, Body } from '@nestjs/common';
import { InternshipService } from './internship.service';

@Controller('internship')
export class InternshipController {
  constructor(private readonly internshipService: InternshipService) {}

  @Post()
  async create(@Body() createInternshipDto: any) {
    await this.internshipService.create(createInternshipDto);
    return { success: true, message: 'Application received successfully.' };
  }

  @Get()
  async findAll() {
    return this.internshipService.findAll();
  }
}

