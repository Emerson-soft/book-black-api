import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "../users/user.repository.js";
import { PasswordHasher } from "@nestjs/authentication";
import { User } from "../users/user.entity.js";
import { SignUpDto } from "./auth.dto.js";

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
}

