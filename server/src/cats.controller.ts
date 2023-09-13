import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: any) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.catsService.findAll();
  }
}
