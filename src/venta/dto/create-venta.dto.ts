import { Type } from 'class-transformer';
import { IsString, IsNumber, IsOptional, IsNotEmpty, Min, ArrayMinSize, ValidateNested, IsArray } from 'class-validator';

export class CreateVentaDto {
    @IsNumber()
    @IsNotEmpty()
    idTurno!: number;

    @IsNumber()
    @IsNotEmpty()
    idUsuario!: number;

    @IsNumber()
    @IsOptional()
    idCliente?: number;

    @IsNumber()
    @IsOptional()
    montoRedondeo?: number;

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreateDetalleVentaAnidadoDto)
    detalles!: CreateDetalleVentaAnidadoDto[];

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    @Type(() => CreatePagoVentaAnidadoDto)
    pagos!: CreatePagoVentaAnidadoDto[];
}

class CreateDetalleVentaAnidadoDto {
    @IsString()
    @IsNotEmpty()
    idProducto!: string;

    @IsNumber()
    @Min(0)
    cantidad!: number;

    @IsNumber()
    @IsOptional()
    idPromocion?: number;
}

class CreatePagoVentaAnidadoDto {
    @IsNumber()
    @IsNotEmpty()
    idMetodoPago!: number;

    @IsNumber()
    @IsNotEmpty()
    idCuentaDestino!: number;

    @IsNumber()
    @Min(0)
    monto!: number;
}
