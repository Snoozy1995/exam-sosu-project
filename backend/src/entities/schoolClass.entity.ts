import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { School } from './school.entity';
import { User } from './user.entity';
import { WorkGroup } from './workGroups.entity';
@Entity()
export class SchoolClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => School, (school) => school.classes)
  school: School;

  @OneToMany(() => WorkGroup, (group) => group.class)
  groups: WorkGroup[];

  @ManyToMany(() => User, (user) => user.classes)
  users: User[];

  //@Column({ default: true })
  //isActive: boolean;
}
