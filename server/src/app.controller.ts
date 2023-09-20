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
}
