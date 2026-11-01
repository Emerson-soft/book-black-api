import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "./customer.repository.js";
import { ICreateCustomer, IFindCustomerParams } from "./customer.interface.js";
import { User } from "../users/user.entity.js";

@Injectable()
export class CustomerService {
    constructor(
        private readonly customerRepository: CustomerRepository
    ) { }

    async create(customer: ICreateCustomer) {
        return this.customerRepository.create(customer);
    }

    async findAll(user: User) {
        return this.customerRepository.findAll(user);
    }
}