import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { FS3Data } from './fs3Data.entity';
@Entity()
export class FS3Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  definition: string;

  @Column()
  description: string;

  @OneToMany(() => FS3Data, (data) => data.type)
  data: FS3Data[];
}
