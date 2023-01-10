import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoPi } from './grupopi/entities/grupopi.entity';
import { GrupoPiModule } from './grupopi/grupopi.module';
import { Projeto } from './projeto/entities/projeto.entity';
import { ProjetoModule } from './projeto/projeto.module';
import { Turma } from './turma/entities/turma.entity';
import { TurmaModule } from './turma/turma.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_hackathon',
      entities: [Turma, Projeto, GrupoPi],
      synchronize: true
    }),
    TurmaModule,
    ProjetoModule,
    GrupoPiModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { }
