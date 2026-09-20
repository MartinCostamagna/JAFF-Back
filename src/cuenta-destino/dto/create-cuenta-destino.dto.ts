import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateCuentaDestinoDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsBoolean()
    @IsOptional()
    activa?: boolean;
}
