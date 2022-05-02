import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn } from 'typeorm';
@Entity()
export class City {
  @ApiProperty()
  @PrimaryColumn()
  name: string;

  @ApiProperty()
  @Column()
  postCode: number;
}
