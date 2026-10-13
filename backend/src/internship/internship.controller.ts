import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { InternshipService } from './internship.service';

@Controller('internship')
export class InternshipController {
  constructor(private readonly internshipService: InternshipService) {}

  @Post()
  async create(@Body() createInternshipDto: any) {
    await this.internshipService.create(createInternshipDto);
    return { success: true, message: 'Application received successfully.' };
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.internshipService.findAll();
  }
}

