import { CurrentUser, Public, SignInService } from "@nestjs/authentication";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CredentialsService } from "./credentials.service.js";
import { SignInDto, SignUpDto } from "./auth.dto.js";
import { signInSchema, signUpSchema } from "./auth.schemas.js";
import { User } from "../users/user.entity.js";


@Controller('auth')
export class AuthController {
    constructor(
        private readonly credentialService: CredentialsService,
        private readonly signInService: SignInService
    ) { }

    @Public()
    @Post('sign-up')
    async signUp(@Body({ schema: signUpSchema }) body: SignUpDto) {
        const { password, ...user } = await this.credentialService.register(body);
        await this.signInService.signIn(String(user.id), { method: 'password' });
        return user;
    }

    @Public()
    @Post('sign-in')
    async signIn(@Body({ schema: signInSchema }) body: SignInDto) {
        const user = await this.credentialService.login(body);
        await this.signInService.signIn(String(user.id), { method: 'password' });
        return user;
    }

    @Public()
    @Post('logout')
    async logout() {
        await this.signInService.signOut();
    }



    @Get('me')
    getMe(@CurrentUser() user: User) {
        return user
    }
}