import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // Importa InjectModel
import { Model } from 'mongoose'; // Importa el tipo Model
import { Posts } from './posts/posts';
import { UpdatePostDto } from './dtos/update-post-dto/update-post-dto';
import { Opiniones } from './posts/opiniones';
import { OpinionesDTO } from './dtos/update-post-dto/opiniones-dto';



@Injectable()
export class AppService {
  //En el constructor añadimos un decorador injectModel de post.name al postsModel
  constructor(
      @InjectModel(Posts.name) 
                                  //Este Model con el generic Type de Posts viene de mongoose
      private readonly postsModel: Model<Posts>,

      @InjectModel(Opiniones.name)
      private readonly opinionesModel: Model<Opiniones>
    ) {}

  getHello(): string {
    return 'Hello World!';
  }
 //Una función asincroma que esta todo el rato escuchando, le pasamos una promesa de tipo array post, espera hasta tenerla y luego la devuelve
  async getPosts(): Promise<Posts[]> {
    const posts = await this.postsModel.find().exec();
    return posts;
  }
  
//Una función asincroma que esta todo el rato escuchando, le pasamos una promesa de tipo post, espera hasta tenerla y luego la devuelve
  async getPostById(id: string): Promise<Posts> {
    
    const post = await this.postsModel.findOne({_id: id});
    return post;
  }


async getPostsByCategoria(categoria: string): Promise<Posts[]> {
  const posts = await this.postsModel.find({ categoria: categoria });
  return posts;
}

async getPostsByNew(isNew: boolean): Promise<Posts[]> {
  const posts = await this.postsModel.find({ isNew: isNew });
  return posts;
}


 
async getPostByTitulo(titulo: string): Promise<Posts> {

  const post = await this.postsModel.findOne({ titulo: titulo });
  return post;
}

  async updatePostById(id: string, updatePostDto: UpdatePostDto): Promise<Posts> {
    //Cargamos los datos que vamos a utilizar desde el dto
    const filter = { _id: id };
    //Estos las claves de este objeto tienen que estar escritas conforme la clase
    const update = {
      titulo: updatePostDto.titulo,
      subtitulo: updatePostDto.subtitulo,
      texto: updatePostDto.texto,
      imagen: updatePostDto.imagen,
      isNew: updatePostDto.isNew,
      categoria: updatePostDto.categoria
    };

    //Utilizo el método findByIdAndUpdate para pasarle el id que quiero y los datos que voy a actualizar (dto)
    const updatedPost = await this.postsModel.findByIdAndUpdate(filter, update);

    return updatedPost;
  }

  async deletePostById(id: string): Promise<Posts> {
    //Cargamos los datos que vamos a utilizar desde el dto
    const filter = { _id: id };
   

    //Utilizo el método findByIdAndUpdate para pasarle el id que quiero y los datos que voy a actualizar (dto)
    const updatedPost = await this.postsModel.findByIdAndDelete(filter);


    return updatedPost;
  }



  //APARTADO OPINIONES

  async getOpiniones() :Promise<Opiniones[]>{
    const opiniones = await this.opinionesModel.find().exec();
    return opiniones;
  }

  async deleteOpinionById(id: string): Promise<Opiniones> {
    const filter = { _id: id};
    const deleteOpinion = await this.opinionesModel.findOneAndDelete(filter);
    return deleteOpinion;
  }


  async createOpinion(opinionDTO : Opiniones): Promise<Opiniones> {

    //Creamos un objeto de tipo opiniones, lo parseamos a json
    const create = JSON.parse(JSON.stringify(opinionDTO));

    const createOpinion = await this.opinionesModel.create(create);

    return createOpinion;
  }


}
