import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity.js';
import { join } from 'node:path';
import { AuthenticationModule } from '@nestjs/authentication';
import { UserModule } from './users/user.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'book',
      entities: [User],
      synchronize: false,
      migrations: [join(import.meta.dirname, "/src/database/migrations/**/*{.js,.ts}")],

      migrationsRun: false,
      migrationsTransactionMode: "all"
    }),
    AuthenticationModule.forRoot({
      session: {
        absoluteTtl: '14d',
        idleTtl: '3d',
        trustedOrigins: [
          'http://localhost:4200',
          'http://172.19.215.89:4200',
        ],
        cookie: {
          secure: process.env.NODE_ENV === 'production',
        },
      },
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
