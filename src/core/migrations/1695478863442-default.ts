import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695478863442 implements MigrationInterface {
  name = "Default1695478863442";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "motoristas" ("id" SERIAL NOT NULL, "nome" character varying(255) NOT NULL, "cpf" character varying(255) NOT NULL, "telefone" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "endereco" character varying(255) NOT NULL, "cnh" character varying(255) NOT NULL, CONSTRAINT "PK_bed77c88836201231df1d9314e5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "motorista_veiculos" ("id" SERIAL NOT NULL, "motorista_id" integer, "veiculo_id" integer, CONSTRAINT "PK_90a0b796ddfa8084bf527c4be1f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "veiculos" ("id" SERIAL NOT NULL, "placa" character varying(255) NOT NULL, "chassi" character varying(255) NOT NULL, "renavam" character varying(255) NOT NULL, "modelo_id" integer, CONSTRAINT "PK_0c3daa1e5d16914bd9e7777cf77" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "modelos" ("id" SERIAL NOT NULL, "modelo" character varying(255) NOT NULL, "marca" character varying(255) NOT NULL, "ano" character varying(255) NOT NULL, "cor" character varying(255) NOT NULL, "combustivel" character varying(255) NOT NULL, CONSTRAINT "PK_e9df275f890167381d41c793603" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "motorista_veiculos" ADD CONSTRAINT "FK_cfe93ea3a41fa979d9ec54a03d1" FOREIGN KEY ("motorista_id") REFERENCES "motoristas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "motorista_veiculos" ADD CONSTRAINT "FK_37914321cc67fd2b7a80222ce6f" FOREIGN KEY ("veiculo_id") REFERENCES "veiculos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "veiculos" ADD CONSTRAINT "FK_b6d1088c614742c1b004b6ff8c9" FOREIGN KEY ("modelo_id") REFERENCES "modelos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "veiculos" DROP CONSTRAINT "FK_b6d1088c614742c1b004b6ff8c9"`
    );
    await queryRunner.query(
      `ALTER TABLE "motorista_veiculos" DROP CONSTRAINT "FK_37914321cc67fd2b7a80222ce6f"`
    );
    await queryRunner.query(
      `ALTER TABLE "motorista_veiculos" DROP CONSTRAINT "FK_cfe93ea3a41fa979d9ec54a03d1"`
    );
    await queryRunner.query(`DROP TABLE "modelos"`);
    await queryRunner.query(`DROP TABLE "veiculos"`);
    await queryRunner.query(`DROP TABLE "motorista_veiculos"`);
    await queryRunner.query(`DROP TABLE "motoristas"`);
  }
}
