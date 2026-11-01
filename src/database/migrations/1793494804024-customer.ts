import { MigrationInterface, QueryRunner } from "typeorm";

export class Customer1793494804024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "customer" (
                id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,    
                name VARCHAR(255) NOT NULL,
                user_id INT NOT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT (now() AT TIME ZONE 'UTC'),
                FOREIGN KEY (user_id) REFERENCES "user"(id)
            )    
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS customer;
        `)
    }

}
