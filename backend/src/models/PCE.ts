import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PCEs') // Decorator para associar entidades/funcoes de JS as colunas da BD
                // Caso precise de alguma informacao que nao tem coluna associada na BD é so remover o @Column de cada linha
export default class PCE {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    charger_type: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: number;
}

// este file tem de estar relacionado/igual ao file de criacao de BD migrations/create_PCE.ts