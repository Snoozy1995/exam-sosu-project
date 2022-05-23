import {ApiProperty} from '@nestjs/swagger';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {Activity} from './activity.entity';
import {Citizen} from './citizen.entity';
import {User} from './user.entity';

@Entity()
export class UploadedDocument {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  filename: string;

  @ApiProperty()
  @Column()
  originalname: string;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.files)
  uploader: User;

  @ApiProperty()
  @Column()
  size: number;

  //@ApiProperty({ type: () => [Citizen], required: false })
  @ManyToMany(() => Citizen, (citizen) => citizen.files)
  @JoinTable()
  citizens: Citizen[];

  //@ApiProperty({ type: [Activity], required: false })
  @ManyToMany(() => Activity, (activity) => activity.files)
  @JoinTable()
  activities: Activity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
