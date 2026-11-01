import { User } from "../users/user.entity.js"

export interface ICreateCustomer {
    name: string
    user: User
}

export interface IFindCustomerParams {
    userId: number
    params: string
}