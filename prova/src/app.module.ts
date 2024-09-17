import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasModule } from './receitas/receitas.module';
import { ReceitasService } from './receitas/receitas.service';

@Module({
  imports: [ReceitasModule],
})
export class AppModule {}