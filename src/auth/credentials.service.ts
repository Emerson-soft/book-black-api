import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "../users/user.repository.js";
import { PasswordHasher } from "@nestjs/authentication";
import { User } from "../users/user.entity.js";
import { SignUpDto } from "./auth.dto.js";
import { SignInDto } from "./auth.schemas.js";

@Injectable()
export class CredentialsService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly passwordHasher: PasswordHasher
    ) { }

    async register(payload: SignUpDto): Promise<User> {
        if (await this.userRepository.findByEmail(payload.email)) {
            throw new ConflictException('User already exists');
        }

        return this.userRepository.create({
            ...payload,
            password: await this.passwordHasher.hash(payload.password)
        })
    }

    async login(payload: SignInDto): Promise<User> {
        const user = await this.userRepository.findByEmail(payload.email);

        const valid = await this.passwordHasher.verify(payload.password, user?.password ?? '')
        if (!valid || !user) {
            throw new NotFoundException('Invalid credentials');
        }


        return user;
    }
}

