import { ApiProperty } from "@nestjs/swagger/dist/decorators";

//DTO para los datos
export class UpdatePostDto {
    //En el dto decoramos cada variable para que el swagger la reconozca
    @ApiProperty()
    titulo: string;
    @ApiProperty()
    subtitulo: string;
    @ApiProperty()
    texto: string;
    @ApiProperty()
    imagen: string;
    @ApiProperty()
    creador: string;
    @ApiProperty()
    isNew: false;
    @ApiProperty()
    categoria: string;
  }
