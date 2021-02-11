import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPCE1612630456045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pces',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',

                },
                {
                    name: 'charger_type',
                    type: 'varchar',
                },
                // CHECK COLUMNS type and nr
                // CHECK TYPE ********
                {
                    name: 'opening_hours',
                    type: 'varchar',
                    // default: '24h',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pces')
    }
    // RUN MOGRATIONS: "yarn typeorm migration:run"

}
