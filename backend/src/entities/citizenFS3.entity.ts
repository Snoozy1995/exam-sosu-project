import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Activity } from './activity.entity';
import { Citizen } from './citizen.entity';
import { FS3Data } from './fs3Data.entity';
import { UploadedDocument } from './uploadedDocument.entity';
@Entity()
export class CitizenFS3 {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FS3Data)
  fs3: FS3Data;

  @ManyToOne(() => Citizen, (citizen) => citizen.fs3)
  citizen: Citizen;

  @ManyToOne(() => Activity, (activity) => activity.fs3)
  activity: Activity;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  organisation: string;

  @Column()
  startDate: number;

  @Column({ nullable: true, default: null })
  endDate: number;

  @ManyToMany(() => UploadedDocument, (file) => file.activities)
  files: File[];

  @ManyToOne(() => Activity, (activity) => activity.children)
  parent: Activity;

  @OneToMany(() => Activity, (activity) => activity.parent)
  children: Activity[];
}
