import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class FS3 {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  definition: string;

  @ApiProperty()
  @Column()
  description: string;

  //@ApiProperty({ type: () => FS3, required: false })
  @ManyToOne(() => FS3, (fs3) => fs3.children)
  parent: FS3;

  @ApiProperty({ type: () => [FS3], required: false })
  @OneToMany(() => FS3, (fs3) => fs3.parent)
  children: FS3[];
}
