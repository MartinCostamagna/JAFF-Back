import { IsString, IsEmail, IsEnum, IsBoolean, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { RolUsuario } from '../entities/usuario-rol.enum';

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsString()
    @IsNotEmpty()
    apellido!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    contrasena!: string;

    @IsEnum(RolUsuario)
    @IsNotEmpty()
    rol!: RolUsuario;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
