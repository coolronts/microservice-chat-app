import {MigrationInterface, QueryRunner, Table, TableIndex} from "typeorm";

export class users1636302718519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                columns: [
                    {
                        isPrimary: true,
                        length: "36",
                        name: "id",
                        type: "char",
                    },
                    {
                        name: "username",
                        length: "25",
                        type: "varchar",
                    },
                    {
                        
                        name: "passwordHash",
                        length: "60",
                        type: "char",
                    },
                    {
                        default: "now()",
                        name: "createdAt",
                        type: "timestamp",
                    },
                ],
                name: "users",
            })
        );

        await queryRunner.createIndex(
            "users",
            new TableIndex({
                columnNames: ["username"],
                isUnique: true,
                name: "unique_username",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
