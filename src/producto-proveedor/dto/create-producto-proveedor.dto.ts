import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateProductoProveedorDto {
    @IsString()
    @IsNotEmpty()
    idProducto!: string;

    @IsNumber()
    @IsNotEmpty()
    idProveedor!: number;

    @IsNumber()
    @Min(0)
    precioCosto!: number;
}
