import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
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

  @ApiProperty()
  @Column()
  city: string;
}
