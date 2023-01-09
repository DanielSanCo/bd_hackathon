import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoPiController } from './controllers/grupopi.controller';
import { GrupoPi } from './entities/grupopi.entity';
import { GrupoPiService } from './services/grupopi.service';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoPi])],
  controllers: [GrupoPiController],
  providers: [GrupoPiService],
  exports: [TypeOrmModule]
})
export class GrupoPiModule { }
