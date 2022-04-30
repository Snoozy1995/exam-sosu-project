import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Citizen } from './citizen.entity';
@Entity()
export class UploadedDocument {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  uploader: string;

  @Column({
    default: Date.now(),
  })
  timestamp: number;

  @ManyToMany(() => Citizen, (citizen) => citizen.files, {
    cascade: true,
  })
  @JoinTable()
  citizens: Citizen[];
}
