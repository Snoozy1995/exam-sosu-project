import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  OneToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { Address } from './address.entity';
import { Citizen } from './citizen.entity';
import { SchoolClass } from './schoolClass.entity';
import { User } from './user.entity';
@Entity()
export class School {
  @ApiProperty()
  @Index({ fulltext: true })
  @PrimaryColumn()
  name: string;

  @ApiProperty()
  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  @ApiProperty({ type: [SchoolClass] })
  @OneToMany(() => SchoolClass, (schoolClass) => schoolClass.school)
  classes: SchoolClass[];

  @ApiProperty({ type: [User] })
  @OneToMany(() => User, (user) => user.school)
  users: User[];

  @ApiProperty({ type: [Citizen] })
  @OneToMany(() => Citizen, (citizen) => citizen.school)
  citizens: Citizen[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
