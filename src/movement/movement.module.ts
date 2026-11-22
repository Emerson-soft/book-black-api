import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Movement } from "./movement.entity.js";
import { MovementRepository } from "./movement.repository.js";
import { MovementService } from "./movement.service.js";
import { MovementController } from "./movement.controller.js";

@Module({
    imports: [
        TypeOrmModule.forFeature([Movement])
    ],
    providers: [MovementRepository, MovementService],
    controllers: [MovementController],
})
export class MovementModule { }