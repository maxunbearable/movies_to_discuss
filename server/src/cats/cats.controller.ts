import { Controller, Get, Post, Body } from '@nestjs/common';
import { Cat, CatsService } from './cats.service';

export interface CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
