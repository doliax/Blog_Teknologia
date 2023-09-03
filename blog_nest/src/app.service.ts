
import { Injectable } from '@nestjs/common';


//En el servicio tenemos la logica del backend 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
