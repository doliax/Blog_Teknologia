import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

//Mapeamos el schema
@Schema()
export class Opiniones {

    @Prop()
    email: string;

    @Prop()
    puntuacion: number;

    @Prop()
    descripcion: string;
}


export const OpinionSchema = SchemaFactory.createForClass(Opiniones);