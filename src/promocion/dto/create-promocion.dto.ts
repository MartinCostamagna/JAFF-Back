import { IsString, IsNotEmpty, IsNumber, IsBoolean, Min, IsOptional, IsEnum } from 'class-validator';
import { TipoPromocion } from '../entities/tipo-promocion.enum';

export class CreatePromocionDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsEnum(TipoPromocion)
    @IsNotEmpty()
    tipo!: TipoPromocion;

    @IsNumber()
    @Min(0)
    valorDescuento!: number;

    @IsBoolean()
    @IsOptional()
    activa?: boolean;
}
