import {Fs3DataRepository} from "../../borders/fs3Data.repository";
import {FS3Data} from "../../../entities/fs3Data.entity";
import {CreateFS3DataDto} from "../../../fs3Data/dto/createFS3Data.dto";

export class CreateFS3DataInteractor {
    constructor(private readonly fs3DataRepository: Fs3DataRepository) {}

    public async createFS3Data(fs3Data: FS3Data): Promise<FS3Data> {
        return this.fs3DataRepository.createFS3Data(fs3Data);
    }
}
