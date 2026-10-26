import { Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity.js";
import { Repository } from "typeorm";
import { SignUpDto } from "../auth/auth.schemas.js";


export interface IUserCreate {
  email: string
  password: string | null
  emailVerifield: boolean
  name: string
  company_name: string
}

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(user: SignUpDto): Promise<User> {
    return await this.userRepository.save({
      ...user,
      email: this.normalizeEmail(user.email),
      email_verifield: false,
      created_at: new Date().toUTCString()
    })
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id })
  }

  async findByEmail(email: string): Promise<User | null> {
    const normalizedEmail = this.normalizeEmail(email)
    return await this.userRepository.findOneBy({ email: normalizedEmail })
  }

  public normalizeEmail(email: string): string {
    if (!email) return '';

    return email.trim().normalize('NFC').toLowerCase()
  }
}