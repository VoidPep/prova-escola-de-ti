import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}