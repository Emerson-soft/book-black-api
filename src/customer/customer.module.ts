import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./customer.entity.js";
import { CustomerService } from "./customer.service.js";
import { CustomerController } from "./customer.controller.js";
import { CustomerRepository } from "./customer.repository.js";

@Module({
    imports: [
        TypeOrmModule.forFeature([Customer]),
    ],
    providers: [CustomerService, CustomerRepository],
    exports: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule { }