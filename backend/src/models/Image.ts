import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Pce from './Pce'

@Entity('images') // Decorator para associar entidades/funcoes de JS as colunas da BD
                // Caso precise de alguma informacao que nao tem coluna associada na BD é so remover o @Column de cada linha
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Pce, pce => pce.images)
    @JoinColumn({ name: 'pce_id' })
    pce: Pce;
}

// este file tem de estar relacionado/igual ao file de criacao de BD migrations/create_PCE.ts