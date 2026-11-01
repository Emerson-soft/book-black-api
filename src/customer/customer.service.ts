import { Injectable } from "@nestjs/common";
import { CustomerRepository } from "./customer.repository.js";
import { ICreateCustomer } from "./customer.interface.js";

@Injectable()
export class CustomerService {
    constructor(
        private readonly customerRepository: CustomerRepository
    ) { }

    async create(customer: ICreateCustomer) {
        return this.customerRepository.create(customer);
    }
}