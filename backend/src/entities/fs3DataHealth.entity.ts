import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn,} from 'typeorm';


@Entity()
export class Fs3DataHealth {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('text', {nullable: true})
    condition: string;

    @ApiProperty()
    @Column('text', {nullable: true})
    professionalConditionOpinion: string;

    @ApiProperty()
    @Column('text', {nullable: true})
    expectedConditionDescription: string;

    @ApiProperty()
    @Column('text', {nullable: true})
    potentialProblems: string;
}
