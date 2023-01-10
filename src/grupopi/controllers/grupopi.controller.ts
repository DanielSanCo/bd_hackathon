import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { GrupoPi } from "../entities/GrupoPi.entity";
import { GrupoPiService } from "../services/grupopi.service";

@Controller("/grupos")
export class GrupoPiController {
    constructor(private readonly grupoPiService: GrupoPiService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<GrupoPi[]> {
        return this.grupoPiService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<GrupoPi> {
        return this.grupoPiService.findById(id);
    }

}