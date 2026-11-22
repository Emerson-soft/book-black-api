import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movement } from "./movement.entity.js";
import { Repository } from "typeorm";
import { MovementCreateDto } from "./dto/movement-create.dto.js";

@Injectable()
export class MovementRepository {
    constructor(
        @InjectRepository(Movement)
        private readonly repository: Repository<Movement>,
    ) { }

    async create(payload: MovementCreateDto): Promise<void> {
        await this.repository.save({
            amount: payload.amount,
            description: payload.description,
            customer_id: payload.customer_id,
            is_expense: true,
            quantity: 1,
        })
    }
}