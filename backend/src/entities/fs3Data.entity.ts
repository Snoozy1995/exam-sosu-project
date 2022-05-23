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
import {User} from "./user.entity";
import {WorkGroup} from "./workGroups.entity";

@Entity()
export class FS3Data {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @ManyToOne(() => FS3, )
    fs3: FS3;

    @ApiProperty({ type: ()=> Citizen, required: false })
    @ManyToOne(() => Citizen, (citizen) => citizen.fs3)
    citizen: Citizen;

    @ApiProperty({ type: ()=> Activity, required: false })
    @ManyToOne(() => Activity, (activity) => activity.fs3)
    activity: Activity;


    // @ApiProperty()
    // @Column('text')
    // input: string;

    // @ApiProperty({ required: false })
    // @Column({ nullable: true })
    // functionalAbility: number;

    @ApiProperty()
    @CreateDateColumn()
    created_at: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updated_at: Date;

    @ApiProperty()
    @OneToOne(() => Fs3DataGeneral, {cascade: true, nullable: true})
    @JoinColumn()
    generalData: Fs3DataGeneral;

    @ApiProperty()
    @OneToOne(() => Fs3DataHealth, {cascade: true, nullable: true})
    @JoinColumn()
    healthData: Fs3DataHealth;

    @ApiProperty()
    @OneToOne(() => Fs3DataFunctional, {cascade: true, nullable: true})
    @JoinColumn()
    functionalData: Fs3DataFunctional;
}
