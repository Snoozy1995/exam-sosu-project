import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Activity } from './activity.entity';
import { Citizen } from './citizen.entity';
import { FS3 } from './fs3.entity';
@Entity()
export class FS3Data {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => FS3)
  fs3: FS3;

  @ManyToOne(() => Citizen, (citizen) => citizen.fs3)
  citizen: Citizen;

  @ManyToOne(() => Activity, (activity) => activity.fs3)
  activity: Activity;

  @ApiProperty()
  @Column()
  input: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  functionalAbility: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
