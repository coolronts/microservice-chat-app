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
              name: 'session_id',
              type: 'varchar',
              length: '255',
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              isNullable: false,
              default: 'CURRENT_TIMESTAMP'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              isNullable: false,
              default: 'CURRENT_TIMESTAMP'
            },
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
