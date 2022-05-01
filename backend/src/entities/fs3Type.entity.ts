import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FS3Data } from './fs3Data.entity';
@Entity()
export class FS3Type {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  definition: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany(() => FS3Data, (data) => data.type)
  data: FS3Data[];
}
