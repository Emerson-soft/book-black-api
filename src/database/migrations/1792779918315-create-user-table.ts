import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1792779918315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "user" (
                id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                email varchar(100) NOT NULL,
                password varchar(255) NOT NULL,
                name varchar(100) NOT NULL,
                company_name varchar(100) NOT NULL,
                email_verifield bool DEFAULT false,
                created_at timestamptz NOT NULL DEFAULT now()
            )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "user"`);
    }

}
