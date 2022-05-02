import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { City } from './city.entity';
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
  note: string;

  @ApiProperty({ type: () => City })
  @ManyToOne(() => City)
  city: City;
}
