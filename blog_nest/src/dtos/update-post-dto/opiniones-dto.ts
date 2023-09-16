import { ApiProperty } from "@nestjs/swagger/dist/decorators";


export class OpinionesDTO {
    @ApiProperty()
    email: string;
    @ApiProperty()
    puntuacion: number;
    @ApiProperty()
    descripcion: string;
}