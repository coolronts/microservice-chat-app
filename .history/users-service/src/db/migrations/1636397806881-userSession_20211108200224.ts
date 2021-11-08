import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
          foreignKeys: [
            {
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'user',
              onDelete: 'CASCADE',
              onUpdate: 'CASCADE',
            },
          ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
