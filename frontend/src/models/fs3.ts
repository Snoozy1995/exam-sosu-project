import { FS3Term } from "./fs3Term";
import {FS3Example} from "../../../backend/dist/entities/fs3Example.entity";
import {HelpQuestion} from "../../../backend/dist/entities/helpQuestion.entity";
import {DocumentationPractice} from "../../../backend/dist/entities/documentationPractice.entity";
import {FS3SubCategory} from "./fs3SubCategory";

export interface FS3 {
  id: number;
  term: FS3Term;
  definition: string;
  active: boolean;
  enableFunctionalAbility: boolean;
  examples: FS3Example[];
  fs3Subs: FS3SubCategory[];
  helpQuestions: HelpQuestion[];
  documentationPractices: DocumentationPractice[];
}
