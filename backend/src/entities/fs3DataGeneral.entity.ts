import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn,} from 'typeorm';

@Entity()
export class Fs3DataGeneral {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('text', {nullable: true})
    description: string;



}
