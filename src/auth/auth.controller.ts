import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly  authService: AuthService){

    }

    @Post('register')
    register(

        @Body()

        registerDto : RegisterDto
        

    ){
        console.log(registerDto)
        return this.authService.register(registerDto);

    }

    @Post('login')
    login(
        @Body()

        loginDto : LoginDto

    ){
        return this.authService.login(loginDto);
    }
}