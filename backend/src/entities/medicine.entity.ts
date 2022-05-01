import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Citizen } from './citizen.entity';
@Entity()
export class Medicine {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  //@ApiProperty({ type: () => Citizen })
  @ManyToOne(() => Citizen, (citizen) => citizen.medicines)
  citizen: Citizen;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  startDate: number;

  @ApiProperty()
  @Column({ nullable: true, default: null })
  endDate: number;
}
