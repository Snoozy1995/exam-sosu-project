import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class City {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  region: string;

  @ApiProperty()
  @Column()
  municipality: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  postCode: number;
}
