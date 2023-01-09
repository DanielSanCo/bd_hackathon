import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Projeto } from "../entities/projeto.entity";

@Injectable()
export class ProjetoService {
    constructor(
        @InjectRepository(Projeto)
        private projetoRepository: Repository<Projeto>
    ) { }

    async findAll(): Promise<Projeto[]> {
        return await this.projetoRepository.find();
    }

    async findById(id: number): Promise<Projeto> {
        let Projeto = await this.projetoRepository.findOne({
            where: {
                id
            }
        });

        if (!Projeto)
            throw new HttpException('Projeto não encontrado', HttpStatus.NOT_FOUND);
        return Projeto

    }

    
}