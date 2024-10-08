import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateIngredienteDto, CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from '../receitas/entities/receita.entity';
import { Ingrediente } from './entities/ingredientes.entity';

@Injectable()
export class ReceitasService {
  constructor(
    @Inject("DATA_SOURCE") private readonly database: DataSource,
  ) {}

  async findAll(): Promise<Receita[]> {
    return await this.database.getRepository(Receita).find();
  }

  async create(createReceitaDto: CreateReceitaDto) {
    return await this.database.getRepository(Receita).save(createReceitaDto)
  }

  async findOne(id: number): Promise<Receita> {
    return await this.database.getRepository(Receita).findOneBy({
      id: id
    });
  }

  async update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return await this.database.getRepository(Receita).update({id}, updateReceitaDto);
  }

  async remove(id: number) {
    return await this.database.getRepository(Receita).delete({id: id})
  }

  async adicionarIngrediente(createIngredienteDto: CreateIngredienteDto) {
    return await this.database.getRepository(Ingrediente).save(createIngredienteDto)
  }
}