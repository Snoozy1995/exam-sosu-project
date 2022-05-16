import {Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {FS3} from "./fs3.entity";
import {DocumentationPractice} from "./documentationPractice.entity";
import {Fs3SubCatDocPrac} from "./fs3SubCatDocPrac.entity";

@Entity()
export class Fs3SubCategory {

    // @ApiProperty()
    // @PrimaryGeneratedColumn()
    // id: number;

    @ApiProperty()
    @Column({primary: true})
    category: string;

    @ApiProperty()
    @ManyToOne(() => FS3, fs3 => fs3.fs3Subs, {primary: true})
    fs3: FS3;

    @ApiProperty()
    @OneToMany(() => Fs3SubCatDocPrac,practice => practice.fs3SubCategory)
    @JoinColumn()
    subCatDocPractices: Fs3SubCatDocPrac[];
}
