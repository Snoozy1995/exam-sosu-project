import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryGeneratedColumn,} from 'typeorm';

@Entity()
export class Fs3DataFunctional {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column('text', {nullable: true})
    citizensDescription: string;

    @ApiProperty()
    @Column('text', {nullable: true})
    citizenWishesAndGoals: string;

    @ApiProperty()
    @Column('text', {nullable: true})
    professionalConditionOpinion: string;

    @ApiProperty()
    @Column('boolean', {nullable: true})
    healthLevel: number;

    @ApiProperty()
    @Column('text', {nullable: true})
    expectedConditionOpinion: string;

    @ApiProperty()
    @Column('boolean', {nullable: true})
    expectedHealthLevel: number;

    @ApiProperty()
    @Column('text', {nullable: true})
    followUp: string;


}
