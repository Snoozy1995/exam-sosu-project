import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, PrimaryColumn} from 'typeorm';
import {FS3} from "./fs3.entity";


@Entity()
export class Example {
    // @ApiProperty()
    // @PrimaryColumn()
    // fs3_id: number;

    @ApiProperty()
    @Column("text")
    example: string;

    @ApiProperty()
    @ManyToOne(() => FS3, fs3 => fs3.helpQuestions, {primary: true})
    fs3: FS3;



}
