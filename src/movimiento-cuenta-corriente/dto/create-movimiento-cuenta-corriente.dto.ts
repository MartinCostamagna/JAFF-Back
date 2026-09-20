import { IsDateString, IsEnum, IsNumber, IsOptional, IsNotEmpty, Min } from 'class-validator';
import { TipoMovimiento } from '../entities/tipo-movimiento.enum';

export class CreateMovimientoCuentaCorrienteDto {
    @IsDateString()
    @IsNotEmpty()
    fecha!: string;

    @IsEnum(TipoMovimiento)
    @IsNotEmpty()
    tipo!: TipoMovimiento;

    @IsNumber()
    @IsNotEmpty()
    @Min(0.01)
    monto!: number;

    @IsNumber()
    @IsNotEmpty()
    idCliente!: number;

    @IsNumber()
    @IsOptional()
    idVenta?: number;
}
