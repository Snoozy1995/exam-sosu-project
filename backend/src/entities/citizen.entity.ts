import { CivilStatus } from '../enums/civilStatus.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UploadedDocument } from './uploadedDocument.entity';
import { Medicine } from './medicine.entity';
import { Address } from './address.entity';
import { ContactPerson } from './contactPerson.entity';
import { FS3Data } from './fs3Data.entity';
import { User } from './user.entity';
import { WorkGroup } from './workGroups.entity';
import { School } from './school.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Activity } from './activity.entity';
@Entity()
export class Citizen {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  birthday: number;

  @ApiProperty()
  @Column()
  civilStatus: CivilStatus;

  @ApiProperty()
  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  @ApiProperty({ type: [UploadedDocument], required: false })
  @ManyToMany(() => UploadedDocument, (file) => file.citizens)
  files: UploadedDocument[];

  @ApiProperty({ type: [Medicine], required: false })
  @OneToMany(() => Medicine, (medicine) => medicine.citizen)
  medicines: Medicine[];

  @ApiProperty({ type: [ContactPerson], required: false })
  @OneToMany(() => ContactPerson, (contact) => contact.citizen)
  contactPersons: ContactPerson[];

  @ApiProperty({ type: () => Citizen, required: false })
  @ManyToOne(() => Citizen, (citizen) => citizen.children)
  parent: Citizen;

  @ApiProperty({ type: () => [Citizen], required: false })
  @OneToMany(() => Citizen, (citizen) => citizen.parent)
  children: Citizen[];

  @ApiProperty({ type: [FS3Data], required: false })
  @OneToMany(() => FS3Data, (cfs3) => cfs3.citizen, {
    cascade: true,
  })
  fs3: FS3Data[];

  @ApiProperty({ type: User, required: false })
  @ManyToOne(() => User, (user) => user.citizens)
  user: User;

  @ApiProperty({ type: WorkGroup, required: false })
  @ManyToOne(() => WorkGroup, (group) => group.citizens)
  group: WorkGroup;

  @ApiProperty({ type: () => School, required: false })
  @ManyToOne(() => School, (school) => school.citizens)
  school: School;

  @ApiProperty({ type: () => [Activity], required: false })
  @OneToMany(() => Activity, (activity) => activity.citizen)
  activities: Activity[];
}
