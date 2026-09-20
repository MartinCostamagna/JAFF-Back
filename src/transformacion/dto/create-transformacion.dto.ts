import { Type } from 'class-transformer';
import { IsDateString, IsString, IsNumber, IsNotEmpty, Min, IsArray, ArrayMinSize, IsOptional, ValidateNested } from 'class-validator';

export class CreateTransformacionDto {
    @IsDateString()
    @IsNotEmpty()
    fecha!: string;

    @IsString()
    @IsNotEmpty()
    idProductoResultante!: string;

    @IsNumber()
    @Min(0)
    cantidadProducida!: number;

    @IsNumber()
    @IsNotEmpty()
    idUsuario!: number;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateDetalleTransformacionAnidadoDto)
    detalles!: CreateDetalleTransformacionAnidadoDto[];
}

class CreateDetalleTransformacionAnidadoDto {
    @IsString()
    @IsNotEmpty()
    idProducto!: string;

    @IsNumber()
    @IsOptional()
    idLote?: number;

    @IsNumber()
    @Min(0)
    cantidad!: number;
}
