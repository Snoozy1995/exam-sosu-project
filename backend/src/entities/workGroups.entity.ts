import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SchoolClass } from './schoolClass.entity';
@Entity()
export class WorkGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => SchoolClass, (schoolClass) => schoolClass.groups)
  class: SchoolClass;

  //@Column({ default: true })
  //isActive: boolean;
}
