import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Activity } from './activity.entity';
import { Citizen } from './citizen.entity';
import { User } from './user.entity';
@Entity()
export class UploadedDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @ManyToOne(() => User, (user) => user.files)
  uploader: User;

  @Column()
  timestamp: number;

  @ManyToMany(() => Citizen, (citizen) => citizen.files, {
    cascade: true,
  })
  @JoinTable()
  citizens: Citizen[];

  @ManyToMany(() => Activity, (activity) => activity.files, {
    cascade: true,
  })
  @JoinTable()
  activities: Activity[];
}
