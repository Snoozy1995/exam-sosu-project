import {Column, Entity, JoinColumn, ManyToOne, OneToOne} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {FS3} from "./fs3.entity";
import {Fs3SubCatDocPrac} from "./fs3SubCatDocPrac.entity";

@Entity()
export class Fs3SubCategory {


    @ApiProperty()
    @Column({primary: true})
    category: string;

    @ApiProperty()
    @ManyToOne(() => FS3, fs3 => fs3.fs3Subs, {primary: true})
    fs3: FS3;

    @OneToOne(() => Fs3SubCatDocPrac)
    @JoinColumn()
    subCatDocPractice: Fs3SubCatDocPrac;

}
