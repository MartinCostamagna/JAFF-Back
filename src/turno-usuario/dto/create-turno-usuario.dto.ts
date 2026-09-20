import { IsNumber, IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateTurnoUsuarioDto {
    @IsNumber()
    @IsNotEmpty()
    idTurno!: number;

    @IsNumber()
    @IsNotEmpty()
    idUsuario!: number;

    @IsDateString()
    @IsNotEmpty()
    fechaEntrada!: string;

    @IsDateString()
    @IsOptional()
    fechaSalida?: string;

    @IsString()
    @IsNotEmpty()
    horaEntrada!: string;

    @IsString()
    @IsOptional()
    horaSalida?: string;
}
