import { MigrationInterface, QueryRunner } from "typeorm";

export class MovementTable1793568410400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "movement" (
                id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                customer_id INT NOT NULL,
                description varchar(100),
                amount DECIMAL(10,2) NOT NULL,
                quantity int NOT NULL,
                is_expense boolean DEFAULT true,
                created_at TIMESTAMP NOT NULL DEFAULT(now() AT TIME ZONE 'UTC'),
                FOREIGN KEY (customer_id) REFERENCES customer(id)
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS "movement"
        `)
    }

}
