import { Role } from '../enums/role.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { School } from './school.entity';
import { SchoolClass } from './schoolClass.entity';
import { UploadedDocument } from './uploadedDocument.entity';
import { Citizen } from './citizen.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  role: Role;

  @OneToMany(() => UploadedDocument, (file) => file.uploader)
  files: File[];

  @ManyToOne(() => School, (school) => school.users)
  school: School;

  @ManyToMany(() => SchoolClass, (schoolClass) => schoolClass.users)
  classes: SchoolClass[];
  //classes

  @OneToMany(() => Citizen, (citizen) => citizen.user)
  citizens: Citizen[];
}
