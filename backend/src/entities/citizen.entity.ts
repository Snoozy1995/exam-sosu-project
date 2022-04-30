import { CivilStatus } from 'src/enums/civilStatus.enum';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { UploadedDocument } from './uploadedDocument.entity';
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

  @Column({ nullable: true, default: null })
  copyFrom: Citizen;

  @ManyToMany(() => UploadedDocument, (file) => file.citizens)
  files: File[];

  //@Column({ default: true })
  //isActive: boolean;
}
