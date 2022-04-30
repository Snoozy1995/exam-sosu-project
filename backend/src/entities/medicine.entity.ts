import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Citizen } from './citizen.entity';
@Entity()
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Citizen, (citizen) => citizen.medicines)
  citizen: Citizen;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: number;

  @Column({ nullable: true, default: null })
  endDate: number;
}
