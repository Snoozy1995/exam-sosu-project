import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {FS3} from "./fs3.entity";


@Entity()
export class FS3Example {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column("varchar")
    fs3Example: string;

    @ApiProperty()
    @ManyToOne(() => FS3, fs3 => fs3.examples, {primary: true})
    fs3: FS3;



}
