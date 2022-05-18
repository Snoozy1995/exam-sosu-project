import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn,} from 'typeorm';

@Entity()
export class Fs3DataFunctional {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('text')
    citizensDescription: string;

    @ApiProperty()
    @Column('text')
    citizenWishesAndGoals: string;

    @ApiProperty()
    @Column('text')
    professionalConditionOpinion: string;

    @ApiProperty()
    @Column('boolean')
    healthLevel: number;

    @ApiProperty()
    @Column('text')
    expectedConditionOpinion: string;

    @ApiProperty()
    @Column('boolean')
    expectedHealthLevel: number;

    @ApiProperty()
    @Column('text')
    followUp: string;


}
