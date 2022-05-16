import {ApiProperty} from '@nestjs/swagger';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Fs3SubCatDocPrac {
    @ApiProperty()
    @PrimaryColumn()
    id: number;

    @ApiProperty()
    @Column("text")
    practice: string;

}
