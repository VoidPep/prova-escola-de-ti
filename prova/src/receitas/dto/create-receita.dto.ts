export class CreateReceitaDto {
    nome: string;
    tempo_preparo: number;
    custo_aproximado: number;
}

export class CreateIngredienteDto {
    receitaId: number;
    nome: string;
}