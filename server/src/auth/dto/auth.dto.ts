import {MinLength, IsEmail, IsString} from 'class-validator'
 
export class AuthDto {

    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'Password must be at least 6 character long'
    })
    @IsString()
    password: string
} 