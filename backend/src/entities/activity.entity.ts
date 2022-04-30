import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { CitizenFS3 } from './citizenFS3.entity';
import { UploadedDocument } from './uploadedDocument.entity';
@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToMany(() => CitizenFS3, (cfs3) => cfs3.activity)
  fs3: CitizenFS3[];
}
