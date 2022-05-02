import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ default: false })
  primaryContact: boolean;

  @ApiProperty()
  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  //@ApiProperty({ type: () => Citizen })
  @ManyToOne(() => Citizen, (citizen) => citizen.contactPersons)
  citizen: Citizen;
}
