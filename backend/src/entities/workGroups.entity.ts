import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Citizen } from './citizen.entity';
import { SchoolClass } from './schoolClass.entity';
@Entity()
export class WorkGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => SchoolClass, (schoolClass) => schoolClass.groups)
  class: SchoolClass;

  @OneToMany(() => Citizen, (citizen) => citizen.group)
  citizens: Citizen[];

  //@Column({ default: true })
  //isActive: boolean;
}
