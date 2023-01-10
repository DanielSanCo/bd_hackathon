import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { GrupoPi } from "../entities/grupopi.entity";

@Injectable()
export class GrupoPiService {
    constructor(
        @InjectRepository(GrupoPi)
        private grupoPiRepository: Repository<GrupoPi>
    ) { }

    async findAll(): Promise<GrupoPi[]> {
        return await this.grupoPiRepository.find({
            relations: {
                turma: true,
                projeto: true
            }
        });
    }

    async findById(id: number): Promise<GrupoPi> {
        let grupoPi = await this.grupoPiRepository.findOne({
            where: {
                id
            },
            relations: {
                turma: true,
                projeto: true
            }
        });

        if (!grupoPi)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);
        return grupoPi

    }

    async create(grupoPi: GrupoPi): Promise<GrupoPi> {
        return await this.grupoPiRepository.save(grupoPi);
    }

    async update(grupoPi: GrupoPi): Promise<GrupoPi> {
        let buscaGrupoPi: GrupoPi = await this.findById(grupoPi.id);

        if(!buscaGrupoPi || !grupoPi.id)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);

        return await this.grupoPiRepository.save(grupoPi);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaGrupoPi = await this.findById(id);

        if(!buscaGrupoPi)
            throw new HttpException('Grupo não encontrado!', HttpStatus.NOT_FOUND);
        
        return await this.grupoPiRepository.delete(id);
    }


    
}