import { IsString, IsNotEmpty, IsDateString, IsNumber, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { TipoNotificacion } from '../entities/tipo-notificacion.enum';

export class CreateNotificacionDto {
    @IsString()
    @IsNotEmpty()
    mensaje!: string;

    @IsDateString()
    @IsNotEmpty()
    fechaYHora!: string;

    @IsEnum(TipoNotificacion)
    @IsNotEmpty()
    tipo!: TipoNotificacion;

    @IsString()
    @IsNotEmpty()
    idProducto!: string;

    @IsNumber()
    @IsOptional()
    idLote?: number;

    @IsBoolean()
    @IsOptional()
    leida?: boolean;
}
