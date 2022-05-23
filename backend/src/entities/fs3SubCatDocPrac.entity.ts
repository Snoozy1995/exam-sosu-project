import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm';
import {Fs3SubCategory} from "./fs3SubCategory.entity";

@Entity()
export class Fs3SubCatDocPrac {
    @ApiProperty()
    @PrimaryColumn()
    id: number;

    @ApiProperty()
    @Column("text")
    practice: string;

    @ManyToOne(() => Fs3SubCategory, fs3SubCat => fs3SubCat.subCatDocPractices)
    category: Fs3SubCategory;
}
