import { IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CerrarTurnoDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    montoEfectivoContado!: number;
}