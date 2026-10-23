import { Module } from "@nestjs/common";
import { UserRepository } from "./user.repository.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity.js";

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserModule { }