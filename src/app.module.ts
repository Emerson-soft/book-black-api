import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity.js';
import { join } from 'node:path';

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
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
