import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class SignUpDto {

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(255)
    @IsNotEmpty()
    password: string

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty()
    name: string

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty()
    company_name: string
}

export class SignInDto {
    @IsEmail()
    email: string;

    @MinLength(8)
    @MaxLength(255)
    password: string
}