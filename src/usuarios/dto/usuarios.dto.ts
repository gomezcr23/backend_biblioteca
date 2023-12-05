import { EstadoUsuario } from "src/estado_usuario/entities/estado_usuario.entity";
import { Role } from "src/roles/entities/role.entity";

export class UsuariosDto {
    cedula: string;
    nombre: string;
    apellido: string;
    telefono: number;
    email: string;
    estadoDelUsuario:EstadoUsuario[];
    roles: Role[];

}

