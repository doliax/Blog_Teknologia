import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; // Importa InjectModel
import { Model } from 'mongoose'; // Importa el tipo Model
import { Posts } from './posts/posts';



@Injectable()
export class AppService {
  //En el constructor añadimos un decorador injectModel de post.name al postsModel
  constructor(
      @InjectModel(Posts.name) 
                                  //Este Model con el generic Type de Posts viene de mongoose
      private readonly postsModel: Model<Posts>
    ) {}

  getHello(): string {
    return 'Hello World!';
  }
 //Una función asincroma que esta todo el rato escuchando, le pasamos una promesa de tipo array post, espera hasta tenerla y luego la devuelve
  async getPosts(): Promise<Posts[]> {
    const posts = await this.postsModel.find().exec();
    return posts;
  }
}

