import {ApiProperty} from '@nestjs/swagger';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {Citizen} from './citizen.entity';
import {SchoolClass} from './schoolClass.entity';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
