import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Fs3SubCategory} from "./fs3SubCategory.entity";


@Entity()
export class Fs3SubCatDocPrac {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    fs3_id: number;

    @ApiProperty()
    @Column("text")
    practice: string;

    @ApiProperty()
    @ManyToOne(() => Fs3SubCategory, fs3SubCat => fs3SubCat.subCatDocPractices)
    fs3SubCategory: Fs3SubCategory;


}
