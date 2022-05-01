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
import { CitizenFS3 } from './citizenFS3.entity';
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

  @ApiProperty({ type: [CitizenFS3] })
  @OneToMany(() => CitizenFS3, (cfs3) => cfs3.activity)
  fs3: CitizenFS3[];

  @ApiProperty({ type: () => Citizen })
  @ManyToOne(() => Citizen, (citizen) => citizen.activities)
  citizen: Citizen;
}
