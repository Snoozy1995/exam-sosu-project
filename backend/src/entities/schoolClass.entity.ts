import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { School } from './school.entity';
import { User } from './user.entity';
import { WorkGroup } from './workGroups.entity';
@Entity()
export class SchoolClass {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ type: () => School })
  @ManyToOne(() => School, (school) => school.classes)
  school: School;

  @ApiProperty({ type: [WorkGroup], required: false })
  @OneToMany(() => WorkGroup, (group) => group.class)
  groups: WorkGroup[];

  @ApiProperty({ type: [User], required: false })
  @ManyToMany(() => User, (user) => user.classes)
  users: User[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
