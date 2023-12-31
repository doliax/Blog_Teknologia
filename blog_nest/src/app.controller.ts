

import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Posts } from './posts/posts'; // Importa el modelo correcto
import { UpdatePostDto } from './dtos/update-post-dto/update-post-dto';
import { Opiniones } from './posts/opiniones';
import { OpinionesDTO } from './dtos/update-post-dto/opiniones-dto';

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

  //En este get le pasamos el id
  @Get('posts/:id') //Ruta para obtener un post por su id
  async getPostById(@Param('id') id: string): Promise<Posts> {
   
      const post = await this.appService.getPostById(id);
      return post;
  }



 @Get('categoria/:categoria') // Ruta para obtener posts por su categoría
 async getPostsByCategoria(@Param('categoria') categoria: string): Promise<Posts[]> {
   const posts = await this.appService.getPostsByCategoria(categoria);
   return posts;
 }

 @Get('estado/:isNew') // Ruta para obtener posts por su estado de new
 async getPostsByisNew(@Param('isNew') isNew: boolean): Promise<Posts[]> {
   const posts = await this.appService.getPostsByNew(isNew);
   return posts;
 }

  @Get('titulo/:titulo') //Ruta para obtener un post por su categoria
  async getPostByName(@Param('titulo') titulo: string): Promise<Posts> {
      const post = await this.appService.getPostByTitulo(titulo);
      return post;
  }

  @Put('posts/:id')     //En este caso param es lo que ponemos en la ruta y body lo que ponemos en el raw json
  async updatePostById(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto, @Res() res): Promise<Posts> {
    //Utilizo el metodo del service
    const post = await this.appService.updatePostById(id, updatePostDto);

    if(post){
      res.status(200).json({ message: 'El post se actualizó exitosamente' });
    }

    return post;
  }

  //Este funciona
  @Delete('posts/:id')                          //Le podemos pasar el res para si logra hacer la acción de borrar nos salga un aviso de exito
  async deletePostById(@Param('id') id: string, @Res() res): Promise<Posts> {
    //Utilizo el metodo del service
    const post = await this.appService.deletePostById(id);
    
    if(post){
      res.status(200).json({ message: 'El post se borró exitosamente' });
    }
    return post;

  }


  //Apartado opiniones
  @Get('opiniones')
  async getOpiniones(): Promise<Opiniones[]> {
    return this.appService.getOpiniones();
  }

  @Delete('opinion/:id')
  async deleteOpinion(@Param('id') id: string, @Res() res): Promise<Opiniones> {
    const opinion = await this.appService.deleteOpinionById(id);
     
    if(opinion){
      res.status(200).json({ message: 'La opinión se borró exitosamente' });
    }
    return opinion
  }


  @Post('opinion')     //En este caso param es lo que ponemos en la ruta y body lo que ponemos en el raw json
  async createOpinion(@Body() OpinionesDTO: Opiniones, @Res() res): Promise<Opiniones> {
    //Utilizo el metodo del service
    const opinion = await this.appService.createOpinion(OpinionesDTO);

    if(opinion){
      res.status(200).json({ message: 'La opinión se creó exitosamente' });
    }

    return opinion;
  }
}