import { Module } from "@nestjs/common";
import { SessionAuth } from "./session-auth.provider.js";
import { UserModule } from "../users/user.module.js";
import { AuthController } from "./auth.controller.js";
import { CredentialsService } from "./credentials.service.js";

@Module({
    imports: [UserModule],
    providers: [SessionAuth, CredentialsService],
    controllers: [AuthController]
})
export class AuthModule { }