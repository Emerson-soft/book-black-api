import { Injectable } from "@nestjs/common";
import { MovementRepository } from "./movement.repository.js";
import { MovementCreateDto } from "./dto/movement-create.dto.js";

@Injectable()
export class MovementService {
    constructor(
        private readonly repository: MovementRepository,
    ) { }

    async create(payload: MovementCreateDto): Promise<void> {
        await this.repository.create(payload)
    }
}