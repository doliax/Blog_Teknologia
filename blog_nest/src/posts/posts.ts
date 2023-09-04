import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

//Mapeamos el schema
@Schema()
export class Posts {

    @Prop()
    titulo: string;

    @Prop()
    subtitulo: string;

    @Prop()
    texto: string;

    @Prop()
    imagen: string;
}

//Esto es nuestro schema real. Creamos una variable que sera el schema de nuestra clase | Esto se lo pasamos al import en app.module
//Lo que hace es convertir a schema una clase
export const PostSchema = SchemaFactory.createForClass(Posts);