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
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  @Index({ unique: true })
  username: string;

  @ApiProperty()
  @Column()
  password: string;

  @Column()
  salt: string;

  @ApiProperty({ type: String })
  @Column()
  role: Role;

  @ApiProperty({ type: [UploadedDocument], required: false })
  @OneToMany(() => UploadedDocument, (file) => file.uploader)
  files: File[];

  @ApiProperty({ type: () => School, required: false })
  @ManyToOne(() => School, (school) => school.users)
  school: School;

  @ApiProperty({ type: [SchoolClass], required: false })
  @ManyToMany(() => SchoolClass, (schoolClass) => schoolClass.users)
  classes: SchoolClass[];

  @ApiProperty({ type: [Citizen], required: false })
  @OneToMany(() => Citizen, (citizen) => citizen.user)
  citizens: Citizen[];
}
