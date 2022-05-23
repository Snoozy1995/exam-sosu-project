import {Fs3OptionRepository} from "../../borders/fs3Option.repository";
import {Fs3Option} from "../../../entities/fs3Option.entity";

export class FindAllFS3OptionsInteractor {
    constructor(private readonly FS3Repository: Fs3OptionRepository) {}

    public findAll(): Promise<Fs3Option[]> {
        return this.FS3Repository.findAll();
    }

}
