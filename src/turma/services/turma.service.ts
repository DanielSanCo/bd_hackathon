import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Turma } from "../entities/turma.entity";

@Injectable()
export class TurmaService {
    constructor(
        @InjectRepository(Turma)
        private turmaRepository: Repository<Turma>
    ) { }

    async findAll(): Promise<Turma[]> {
        return await this.turmaRepository.find();
    }

    async findById(id: number): Promise<Turma> {
        let turma = await this.turmaRepository.findOne({
            where: {
                id
            }
        });

        if (!turma)
            throw new HttpException('Turma não encontrada', HttpStatus.NOT_FOUND);
        return turma

    }

    
}