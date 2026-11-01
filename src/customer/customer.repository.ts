import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Customer } from "./customer.entity.js";
import { Repository } from "typeorm";
import { ICreateCustomer, IFindCustomerParams } from "./customer.interface.js";
import { User } from "../users/user.entity.js";

@Injectable()
export class CustomerRepository {
    constructor(
        @InjectRepository(Customer)
        private readonly repository: Repository<Customer>,
    ) { }

    async create(customer: ICreateCustomer) {
        return this.repository.save({
            name: customer.name,
            user_id: customer.user.id
        });
    }

    async updateCustomer(customer: Customer) {
        return this.repository.update(customer.id, customer);
    }

    async findAll(user: User): Promise<Customer[]> {
        return this.repository.find({
            where: {
                user_id: user.id,
            },
            select: {
                id: true,
                name: true
            }
        })
    }
}