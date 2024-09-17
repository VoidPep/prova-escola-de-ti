import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Receita } from './receita.entity';

@Entity()
export class Ingrediente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nome: string;

  @ManyToOne((type) => Receita, (receita) => receita.ingredientes)
  receita: Receita
}