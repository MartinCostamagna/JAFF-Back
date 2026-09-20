import { Type } from 'class-transformer';
import { IsDateString, IsNotEmpty, IsNumber, ValidateNested, IsArray, ArrayMinSize, Min, IsString } from 'class-validator';

class CreateLoteAnidadoDto {
    @IsNumber()
    @Min(0)
    cantidad!: number;

    @IsDateString()
    @IsNotEmpty()
    fechaVencimiento!: string;
}

class CreateDetalleEntradaAnidadoDto {
    @IsString()
    @IsNotEmpty()
    idProducto!: string;

    @IsNumber()
    @Min(0)
    precioCosto!: number;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateLoteAnidadoDto)
    lotes!: CreateLoteAnidadoDto[];
}

export class CreateEntradaDto {
    @IsDateString()
    @IsNotEmpty()
    fecha!: string;

    @IsNumber()
    @IsNotEmpty()
    idProveedor!: number;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateDetalleEntradaAnidadoDto)
    detalles!: CreateDetalleEntradaAnidadoDto[];
}