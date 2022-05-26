import {FS3Data} from "../../../entities/fs3Data.entity";
import {Fs3DataRepository} from "../../borders/fs3Data.repository";

export class FindAllFS3DataInteractor {
    constructor(private readonly FS3DataRepository: Fs3DataRepository) {}

    public findAll(): Promise<FS3Data[]> {
        return this.FS3DataRepository.findAll();
    }

}
