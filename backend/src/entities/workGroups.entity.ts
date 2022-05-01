import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ type: () => SchoolClass })
  @ManyToOne(() => SchoolClass, (schoolClass) => schoolClass.groups)
  class: SchoolClass;

  @ApiProperty({ type: () => [Citizen], required: false })
  @OneToMany(() => Citizen, (citizen) => citizen.group)
  citizens: Citizen[];
}
