import {FS3TermRepository} from "../../borders/fs3Term.repository";
import {FS3Term} from "../../../entities/fs3Term.entity";

export class FindAllFS3TermsInteractor {
    constructor(private readonly FS3Repository: FS3TermRepository) {}

    public findAll(): Promise<FS3Term[]> {
        return this.FS3Repository.findAll();
    }

}
