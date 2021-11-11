import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1636302718519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}