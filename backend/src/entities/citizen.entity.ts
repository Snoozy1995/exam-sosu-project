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
import { CitizenFS3 } from './citizenFS3.entity';
import { User } from './user.entity';
import { WorkGroup } from './workGroups.entity';
import { School } from './school.entity';
@Entity()
export class Citizen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: number;

  @Column()
  civilStatus: CivilStatus;

  @ManyToMany(() => UploadedDocument, (file) => file.citizens)
  files: UploadedDocument[];

  @OneToMany(() => Medicine, (medicine) => medicine.citizen)
  medicines: Medicine[];

  @OneToMany(() => ContactPerson, (contact) => contact.citizen)
  contactPersons: ContactPerson[];

  @OneToOne(() => Address, {
    cascade: true,
  })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Citizen, (citizen) => citizen.children)
  parent: Citizen;

  @OneToMany(() => Citizen, (citizen) => citizen.parent)
  children: Citizen[];

  @OneToMany(() => CitizenFS3, (cfs3) => cfs3.citizen)
  fs3: CitizenFS3[];

  @ManyToOne(() => User, (user) => user.citizens)
  user: User;
  @ManyToOne(() => WorkGroup, (group) => group.citizens)
  group: WorkGroup;
  @ManyToOne(() => School, (school) => school.citizens)
  school: School;
}
