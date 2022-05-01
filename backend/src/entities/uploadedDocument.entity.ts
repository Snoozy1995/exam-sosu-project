import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  location: string;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.files)
  uploader: User;

  @ApiProperty()
  @Column()
  timestamp: number;

  //@ApiProperty({ type: () => [Citizen], required: false })
  @ManyToMany(() => Citizen, (citizen) => citizen.files, {
    cascade: true,
  })
  @JoinTable()
  citizens: Citizen[];

  //@ApiProperty({ type: [Activity], required: false })
  @ManyToMany(() => Activity, (activity) => activity.files, {
    cascade: true,
  })
  @JoinTable()
  activities: Activity[];
}
