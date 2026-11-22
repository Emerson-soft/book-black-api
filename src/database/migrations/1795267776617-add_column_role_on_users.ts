import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnRoleOnUsers1795267776617 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" ADD COLUMN "role" varchar(50);    
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN "role";    
        `);
    }

}
