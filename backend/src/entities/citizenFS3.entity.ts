import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Activity } from './activity.entity';
import { Citizen } from './citizen.entity';
import { FS3Data } from './fs3Data.entity';
@Entity()
export class CitizenFS3 {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => FS3Data)
  fs3: FS3Data;

  @ManyToOne(() => Citizen, (citizen) => citizen.fs3)
  citizen: Citizen;

  @ManyToOne(() => Activity, (activity) => activity.fs3)
  activity: Activity;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  extras: string;

  @ApiProperty()
  @Column()
  diagnoses: string;

  @ApiProperty()
  @Column()
  condition: string;
}
