import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class FS3 {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  term: string;

  @ApiProperty()
  @Column()
  definition: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column('simple-array')
  synonyms: string[];

  @ApiProperty()
  @Column('simple-array')
  options: string[];
}
