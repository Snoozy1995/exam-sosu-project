import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {FS3} from "./fs3.entity";
import {Fs3SubCatDocPrac} from "./fs3SubCatDocPrac.entity";

@Entity()
export class Fs3SubCategory {

    @ApiProperty()
    @PrimaryColumn()
    id: number;

    @ApiProperty()
    @Column()
    category: string;

    @ApiProperty()
    @ManyToOne(() => FS3, fs3 => fs3.fs3Subs, {primary: true})
    fs3: FS3;

    // @OneToOne(() => Fs3SubCatDocPrac)
    // @JoinColumn()
    // subCatDocPractices: Fs3SubCatDocPrac[];

    @OneToMany(() => Fs3SubCatDocPrac, fs3SubCatDocPrac => fs3SubCatDocPrac.category)
    subCatDocPractices: Fs3SubCatDocPrac[];


}
