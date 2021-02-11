import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPCE1612630456045 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'PCE',
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
                {
                    name: 'opening_hours',
                    type: 'date',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('PCE')
    }
    // RUN MOGRATIONS: "yarn typeorm migration:run"

}
