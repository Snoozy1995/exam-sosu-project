import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn,} from 'typeorm';


@Entity()
export class Fs3DataHealth {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('text')
    condition: string;

    @ApiProperty()
    @Column('text')
    professionalConditionOpinion: string;

    @ApiProperty()
    @Column('text')
    expectedConditionDescription: string;

    @ApiProperty()
    @Column('text')
    potentialProblems: string;
}
