import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FS3Type } from './fs3Type.entity';
@Entity()
export class FS3Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  definition: string;

  @Column()
  description: string;

  @ManyToOne(() => FS3Type, (type) => type.data)
  type: FS3Type;
}
