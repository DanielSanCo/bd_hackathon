import { IsNotEmpty } from "class-validator"
import { Projeto } from "src/projeto/entities/projeto.entity"
import { Turma } from "src/turma/entities/turma.entity"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_grupopi"})
export class GrupoPi {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nomeGrupo: string

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    maisInfos: string

    @ManyToOne(() => Turma, (turma) => turma.id, {
        onDelete: "CASCADE"
    })
    turma: Turma
    
    @OneToMany(() => Projeto, (projeto) => projeto.id)
    projeto: Projeto[]

}