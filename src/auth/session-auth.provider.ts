import { AuthenticationRegistry, SessionCookieProvider, SessionRecord } from "@nestjs/authentication";
import { Injectable } from "@nestjs/common";
import { User } from "../users/user.entity.js";
import { UserRepository } from "../users/user.repository.js";

@Injectable()
export class SessionAuth extends SessionCookieProvider<User> {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly registry: AuthenticationRegistry
    ) {
        super();
        this.registry.registerProvider(this);
    }

    protected async validate(session: SessionRecord): Promise<User | null> {
        return await this.userRepository.findById(Number(session.userId));
    }
} 