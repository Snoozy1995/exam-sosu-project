import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Address {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  street: string;

  @ApiProperty()
  @Column()
  postCode: number;

  @ApiProperty({ required: false })
  @Column()
  note: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
