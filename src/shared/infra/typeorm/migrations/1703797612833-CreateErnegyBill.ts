import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateErnegyBill1703797612833 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ernegyBill',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'clientNumber',
            type: 'varchar',
          },
          {
            name: 'readingDate',
            type: 'timestamp with time zone',
          },
          {
            name: 'readingBill',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'eletricConsumed',
            type: 'int',
          },
          {
            name: 'eletricBill',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'sceeConsumed',
            type: 'int',
          },
          {
            name: 'sceeBill',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'compensedErnegy',
            type: 'int',
          },
          {
            name: 'compensedBill',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'publicLightingContribution',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ernegyBill');
  }
}
