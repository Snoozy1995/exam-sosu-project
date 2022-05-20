import {EntityManager, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {Fs3DataRepository} from "../../domain/borders/fs3Data.repository";
import {FS3Data} from "../../entities/fs3Data.entity";
import {CreateFS3DataDto} from "../../fs3Data/dto/createFS3Data.dto";

@Injectable()
export class Fs3DataRepositoyAdapter implements Fs3DataRepository {
    private readonly fs3DataRepository: Repository<FS3Data>;

    constructor(private readonly em: EntityManager) {
        this.fs3DataRepository = em.getRepository(FS3Data);
    }

    findAll(): Promise<FS3Data[]> {
        return this.fs3DataRepository.find({
            relations: ["generalData", "healthData", "functionalData"]
        },);
    }

    async createFS3Data(fs3Data: FS3Data): Promise<FS3Data> {

        return this.fs3DataRepository.save(fs3Data);
    }
}
