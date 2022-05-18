import {ApiProperty} from '@nestjs/swagger';
import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import {Activity} from './activity.entity';
import {Citizen} from './citizen.entity';
import {FS3} from './fs3.entity';
import {Fs3DataGeneral} from "./fs3DataGeneral.entity";
import {Fs3DataHealth} from "./fs3DataHealth.entity";
import {Fs3DataFunctional} from "./fs3DataFunctional.entity";

@Entity()
export class FS3Data {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => FS3)
  fs3: FS3;

  @ManyToOne(() => Citizen, (citizen) => citizen.fs3)
  citizen: Citizen;

  @ManyToOne(() => Activity, (activity) => activity.fs3)
  activity: Activity;


  // @ApiProperty()
  // @Column('text')
  // input: string;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // functionalAbility: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Fs3DataGeneral)
  @JoinColumn()
  generalData: Fs3DataGeneral;

  @OneToOne(() => Fs3DataHealth)
  @JoinColumn()
  healthData: Fs3DataHealth;

  @OneToOne(() => Fs3DataFunctional)
  @JoinColumn()
  functionalData: Fs3DataFunctional;
}
