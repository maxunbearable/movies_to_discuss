import {Controller, Get, HttpCode, Param, Post, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(244)
  getHello(@Req() request: Request): string {
    return this.appService.getHello();
  }

  @Post()
  create() {
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
