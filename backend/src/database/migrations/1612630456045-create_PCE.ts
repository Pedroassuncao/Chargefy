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
                    name: 'charger',
                    type: 'text',

                },
                // CHECK COLUMNS type and nr
                {
                    name: 'PCE_calendar',
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
