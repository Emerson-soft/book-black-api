import { DataSource } from "typeorm";
import { User } from "../users/user.entity.js";
import { join } from "path";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'book',
  entities: [User],
  synchronize: false,
  migrations: [join(import.meta.dirname, "migrations/*{.js,.ts}")],

  migrationsRun: false,
  migrationsTransactionMode: "all"
})