import { Module } from '@nestjs/common';
import  { ReceitasService } from './receitas.service';
import { ReceitasController } from './receitas.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReceitasController],
  providers: [ReceitasService],
  exports: [ReceitasService],
})
export class ReceitasModule {}
