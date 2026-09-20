import { IsNumber, IsString, IsNotEmpty, Min } from 'class-validator';

export class CreatePromocionProductoDto {
    @IsNumber()
    @IsNotEmpty()
    idPromocion!: number;

    @IsString()
    @IsNotEmpty()
    idProducto!: string;

    @IsNumber()
    @Min(0)
    cantidad!: number;
}
