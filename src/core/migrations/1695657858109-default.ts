import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695657858109 implements MigrationInterface {
    name = 'Default1695657858109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "motoristas" ADD "status" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "motoristas" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "motorista_veiculos" ADD "status" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "veiculos" ADD "status" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelos" ADD "status" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "modelos" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "motoristas" ADD CONSTRAINT "FK_2d4c7baddfba98bc1072322dbad" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "modelos" ADD CONSTRAINT "FK_547563d63cce2e9b8273f6a5485" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "modelos" DROP CONSTRAINT "FK_547563d63cce2e9b8273f6a5485"`);
        await queryRunner.query(`ALTER TABLE "motoristas" DROP CONSTRAINT "FK_2d4c7baddfba98bc1072322dbad"`);
        await queryRunner.query(`ALTER TABLE "modelos" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "modelos" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "veiculos" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "motorista_veiculos" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "motoristas" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "motoristas" DROP COLUMN "status"`);
    }

}
