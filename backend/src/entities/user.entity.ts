import {Role} from '../enums/role.enum';
import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {School} from './school.entity';
import {SchoolClass} from './schoolClass.entity';
import {UploadedDocument} from './uploadedDocument.entity';
import {Citizen} from './citizen.entity';
import {ApiProperty} from '@nestjs/swagger';

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
  @OneToMany(() => UploadedDocument, (file) => file.uploader, { cascade: true })
  files: UploadedDocument[];

  @Column({ nullable: true })
  schoolName: string;

  @ApiProperty({ type: () => School, required: false })
  @ManyToOne(() => School, (school) => school.users)
  @JoinColumn({ name: 'schoolName' })
  school: School;

  @ApiProperty({ type: [SchoolClass], required: false })
  @ManyToMany(() => SchoolClass, (schoolClass) => schoolClass.users)
  classes: SchoolClass[];

  @ApiProperty({ type: [Citizen], required: false })
  @OneToMany(() => Citizen, (citizen) => citizen.user)
  citizens: Citizen[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
