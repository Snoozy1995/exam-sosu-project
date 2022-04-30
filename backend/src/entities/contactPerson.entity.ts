import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Citizen } from './citizen.entity';
@Entity()
export class ContactPerson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  primaryContact: boolean;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Citizen, (citizen) => citizen.contactPersons)
  citizen: Citizen;
}
