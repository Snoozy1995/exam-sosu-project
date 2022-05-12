import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from 'typeorm';
import {FS3} from "./fs3.entity";

@Entity()
export class Fs3Option {
    @ApiProperty()
    @PrimaryColumn()
    option: number;

    @ApiProperty()
    @Column()
    definition: string;

    @ApiProperty()
    @Column()
    description: string;

    @ManyToMany(() => FS3)
    @JoinTable()
    fs3s: FS3[];


}
