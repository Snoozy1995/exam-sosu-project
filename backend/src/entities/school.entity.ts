import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Citizen } from './citizen.entity';
import { SchoolClass } from './schoolClass.entity';
import { User } from './user.entity';
@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(() => SchoolClass, (schoolClass) => schoolClass.school)
  classes: SchoolClass[];

  @OneToMany(() => User, (user) => user.school)
  users: User[];

  @OneToMany(() => Citizen, (citizen) => citizen.school)
  citizens: Citizen[];
}
