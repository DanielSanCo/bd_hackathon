import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Turma } from "../entities/turma.entity";
import { TurmaService } from "../services/turma.service";

@Controller("/turmas")
export class TurmaController {
    constructor(private readonly turmaService: TurmaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Turma[]> {
        return this.turmaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Turma> {
        return this.turmaService.findById(id);
    }
}