import { IsNotEmpty } from "class-validator"
import { GrupoPi } from "src/grupopi/entities/grupopi.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_projeto"})
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nomeProjeto: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    logoProjeto: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    linkProjeto: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    pitProjeto: string

    
    @ManyToOne(() => GrupoPi, (Grupo) => Grupo.id, {
        onDelete: "CASCADE"
    })
    grupo: GrupoPi[]
    
}