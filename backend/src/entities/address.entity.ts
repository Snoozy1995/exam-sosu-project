import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  postCode: number;

  @Column()
  city: string;
}
