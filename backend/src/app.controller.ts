import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { Post, Body } from '@nestjs/common';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('fetch-response')
  async fetchResponse(@Body() body: any): Promise<any> {
    return await this.appService.fetchResponse(body);
  }
}
