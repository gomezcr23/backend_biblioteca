import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsuariosService,
        private readonly jwtService: JwtService
    ){

    }
    async register( {cedula,
        nombre,
        apellido,
        telefono,
        email,
        password,
        estadoDelUsuario,
        roles,}){
        const user = await this.userService.findOneByEmail(email);

        if(user){
            throw new BadRequestException('usuario ya existe');
        }
        return await this.userService.create({cedula,
            nombre,
            apellido,
            telefono,
            email,
            password:await bcryptjs.hash(password, 10),
            estadoDelUsuario,
            roles})
    }

    async login(
        {email, password}: LoginDto
    ){

        
        const user = await this.userService.findOneByEmail(email);

        if(!user){
            throw new BadRequestException('email no existe');
        }

        const ispasswordValid = await bcryptjs.compare(password, user.password);
        if(!ispasswordValid){
            throw new BadRequestException('password no existe');
        }

        const payload = { email: user.email};

        const token = await this.jwtService.signAsync(payload)

        return{
            token,
            email
        }

    }
}
