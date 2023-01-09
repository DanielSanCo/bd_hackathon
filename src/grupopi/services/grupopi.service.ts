import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GrupoPi } from "../entities/GrupoPi.entity";

@Injectable()
export class GrupoPiService {
    constructor(
        @InjectRepository(GrupoPi)
        private grupoPiRepository: Repository<GrupoPi>
    ) { }

    async findAll(): Promise<GrupoPi[]> {
        return await this.grupoPiRepository.find();
    }

    async findById(id: number): Promise<GrupoPi> {
        let grupoPi = await this.grupoPiRepository.findOne({
            where: {
                id
            }
        });

        if (!grupoPi)
            throw new HttpException('Grupo não encontrado', HttpStatus.NOT_FOUND);
        return grupoPi

    }

    
}