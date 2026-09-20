import { IsDateString, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTurnoDto {
    @IsDateString()
    @IsNotEmpty()
    fechaInicio!: string;

    @IsString()
    @IsNotEmpty()
    horaInicio!: string;

    @IsNumber()
    @IsNotEmpty()
    idUsuario!: number;
}
