import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateClienteDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsNumber()
    @IsOptional()
    saldoActual?: number;
}
