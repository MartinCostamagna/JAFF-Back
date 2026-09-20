import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional, Min, IsEnum } from 'class-validator';
import { UnidadMedida } from '../entities/unidad-medida.enum';

export class CreateProductoDto {
    @IsString()
    @IsNotEmpty()
    codigoDeBarras!: string;

    @IsString()
    @IsNotEmpty()
    descripcion!: string;

    @IsNumber()
    @Min(0)
    porcentajeGanancia!: number;

    @IsNumber()
    @Min(0)
    precioVenta!: number;

    @IsEnum(UnidadMedida)
    @IsNotEmpty()
    unidadMedida!: UnidadMedida;

    @IsNumber()
    @Min(0)
    stock!: number;

    @IsNumber()
    @Min(0)
    stockMinimo!: number;

    @IsBoolean()
    @IsOptional()
    esElaborado?: boolean;

    @IsNumber()
    @IsNotEmpty()
    idMarca!: number;

    @IsNumber()
    @IsNotEmpty()
    idCategoria!: number;
}
