import { IsNotEmpty } from "class-validator"
import { GrupoPi } from "src/grupopi/entities/grupopi.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: "tb_turma"})
export class Turma {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 1000, nullable: false })
    descricao: string

    @IsNotEmpty()
    @Column({nullable: false})
    isAtivo: boolean
    
    @OneToMany(() => GrupoPi, (Grupo) => Grupo.id)
    grupo: GrupoPi[]
}