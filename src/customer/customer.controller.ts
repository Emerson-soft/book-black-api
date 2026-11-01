import { Body, Controller, Get, Post } from "@nestjs/common";
import { CustomerService } from "./customer.service.js";
import { CurrentUser } from "@nestjs/authentication";
import { User } from "../users/user.entity.js";
import { CustomerDto } from "./dto/customer-create.dto.js";

@Controller('customer')
export class CustomerController {
    constructor(
        private readonly customerService: CustomerService
    ) { }

    @Post('create')
    async createCustomer(
        @CurrentUser() user: User,
        @Body() createCustomerDto: CustomerDto
    ) {
        await this.customerService.create({
            name: createCustomerDto.name,
            user: user,
        });
    }

    @Get('list')
    async findAll(
        @CurrentUser() user: User,
    ) {
        return this.customerService.findAll(user);
    }
}