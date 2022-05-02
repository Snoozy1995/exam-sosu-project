import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
