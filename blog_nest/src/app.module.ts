import { Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema, Posts } from './posts/posts';

@Module({
imports:
//Al modulo principal le pasamos la ruta de la bd mediante Mongoose
[MongooseModule.forRoot('mongodb://127.0.0.1:27017/blog_db'),
//Tambien importamos el schema de datos que queremos de la bd, en este caso le paso el esquema de la clase post que he creado en el backend
MongooseModule.forFeature([{ name: 'Posts', schema: PostSchema }]),
],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}