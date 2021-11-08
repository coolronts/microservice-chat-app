import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class UserSession1636397806881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'userSession',
          columns: [
            {
              name: 'id',
              type: 'char',
              isPrimary: true,
              length:"36"
            },
            {
              name: 'userId',
              type: 'char',
              length:"36"
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'expiredAt',
              type: 'datetime'
            }
          ],
        })
      );
      await queryRunner.createForeignKey(
        "userSessions",
        new TableForeignKey({
          columnNames: ["userId"],
          referencedColumnNames: ["id"],
          referencedTableName: "users"
        })
      )
      
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("userSessions");
    }

}
