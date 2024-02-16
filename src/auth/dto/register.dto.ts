import { Transform } from "class-transformer";
import { IsArray, IsEAN, IsEmail, IsNumber, IsString, MinLength,  } from "class-validator";
import { EstadoUsuario } from "src/estado_usuario/entities/estado_usuario.entity";
import { Role } from "src/roles/entities/role.entity";


export class RegisterDto {

    @IsNumber()
    cedula: string;
    @IsString()
    @Transform(({value}) => value.trim())
    nombre: string;
    @IsString()
    apellido: string;
    @IsNumber()
    telefono: number;
    @IsEmail()
    email: string;
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string
    @IsArray()
    estadoDelUsuario:EstadoUsuario[];
    @IsArray()
    roles: Role[];


}