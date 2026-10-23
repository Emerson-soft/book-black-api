import { Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity.js";
import { Repository } from "typeorm";

export interface IUserCreate {
  email: string
  passwordHash: string | null
  emailVerifield: boolean
}

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async create(user: IUserCreate): Promise<User> {        
    return {
      company_name: '1',
      created_at: '',
      email: '',
      email_verifield: false,
      id: 2,
      name: '' ,
      password: ''
    }
  }

  public normalizeEmail(email: string): string {
    if (!email) return '';

    return email.trim().normalize('NFC').toLowerCase()
  }
}