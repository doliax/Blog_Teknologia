import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Desde el controller mapeamos y le pasamos las funciones del servicio
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
