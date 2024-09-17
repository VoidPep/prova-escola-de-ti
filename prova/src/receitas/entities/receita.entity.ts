import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ingrediente } from './ingredientes.entity';

@Entity()
export class Receita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nome: string;

  @Column('int')
  tempo_preparo: number;

  @Column('int')
  custo_aproximado: number;

  @OneToMany((type) => Ingrediente,(ingrediente) => ingrediente.receita)
  ingredientes: Ingrediente[];
}