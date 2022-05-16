import { FS3Term } from "./fs3Term";
import {FS3SubCategory} from "./fs3SubCategory";
import {FS3Example} from "./fs3Example";
import {FS3HelpQuestion} from "./fs3HelpQuestion";
import {FS3DocumentationPractice} from "./fs3DocumentationPractice";

export interface FS3 {
  id: number;
  term: FS3Term;
  definition: string;
  active: boolean;
  enableFunctionalAbility: boolean;
  examples: FS3Example[];
  fs3Subs: FS3SubCategory[];
  helpQuestions: FS3HelpQuestion[];
  documentationPractices: FS3DocumentationPractice[];

}
