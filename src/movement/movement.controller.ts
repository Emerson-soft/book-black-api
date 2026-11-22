import { Body, Controller, Post } from "@nestjs/common";
import { MovementService } from "./movement.service.js";
import { MovementCreateDto } from "./dto/movement-create.dto.js";


@Controller('movement')
export class MovementController {
    constructor(
        private readonly movementService: MovementService
    ) { }

    @Post('/')
    async create(@Body() payload: MovementCreateDto): Promise<void> {
        await this.movementService.create(payload)
    }
}