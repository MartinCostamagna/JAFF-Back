import { Type } from 'class-transformer';
import { IsDateString, IsString, IsNumber, IsOptional, IsNotEmpty, IsArray, ArrayMinSize, ValidateNested, Min, IsEnum } from 'class-validator';
import { CategoriaSalida } from '../entities/categoria-salida.enum';

export class CreateSalidaDto {
    @IsDateString()
    @IsNotEmpty()
    fecha!: string;

    @IsEnum(CategoriaSalida)
    @IsNotEmpty()
    categoria!: CategoriaSalida;

    @IsNumber()
    @IsNotEmpty()
    idUsuario!: number;

    @IsString()
    @IsOptional()
    observacion?: string;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateDetalleSalidaAnidadoDto)
    detalles!: CreateDetalleSalidaAnidadoDto[];
}

class CreateDetalleSalidaAnidadoDto {
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