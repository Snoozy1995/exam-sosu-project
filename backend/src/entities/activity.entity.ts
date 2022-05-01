import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Citizen } from './citizen.entity';
import { FS3Data } from './FS3Data.entity';
import { UploadedDocument } from './uploadedDocument.entity';
@Entity()
export class Activity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  organisation: string;

  @ApiProperty()
  @Column()
  startDate: number;

  @ApiProperty()
  @Column({ nullable: true, default: null })
  endDate: number;

  @ApiProperty({ type: () => [UploadedDocument] })
  @ManyToMany(() => UploadedDocument, (file) => file.activities)
  files: File[];

  @ApiProperty()
  @ManyToOne(() => Activity, (activity) => activity.children)
  parent: Activity;

  @ApiProperty({ type: [Activity] })
  @OneToMany(() => Activity, (activity) => activity.parent)
  children: Activity[];

  @ApiProperty({ type: [FS3Data] })
  @OneToMany(() => FS3Data, (cfs3) => cfs3.activity)
  fs3: FS3Data[];

  @ApiProperty({ type: () => Citizen })
  @ManyToOne(() => Citizen, (citizen) => citizen.activities)
  citizen: Citizen;
}
