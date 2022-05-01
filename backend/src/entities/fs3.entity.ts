import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FS3Child } from './fs3Child.entity';
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
  @Column()
  synonyms: string;

  @ApiProperty({ type: () => [FS3Child], required: false })
  @OneToMany(() => FS3Child, (fs3) => fs3.parent)
  children: FS3Child[];
}
