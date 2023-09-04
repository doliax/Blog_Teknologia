

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Posts } from './posts/posts'; // Importa el modelo correcto

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
//Desde el controller mapeamos y le pasamos las funciones del servicio
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
//Aqui le pasamos una promesa con todos el servicio especifico del service
  @Get('posts')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }

  @Get('posts/:id') //Ruta para obtener un post por su id
  async getPostById(@Param('id') id: string): Promise<Posts> {
   
      const post = await this.appService.getPostById(id);
      return post;
   

  }

}