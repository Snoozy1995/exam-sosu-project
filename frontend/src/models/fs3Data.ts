import {Citizen} from "./citizen";
import {FS3} from "./fs3";
import {Fs3DataGeneral} from "./fs3DataGeneral";
import {Fs3DataHealth} from "./fs3DataHealth";
import {Fs3DataFunctional} from "./fs3DataFunctional";

export interface FS3Data {
  id: number;
  fs3: FS3;
  citizen: Citizen;
  generalData: Fs3DataGeneral;
  healthData: Fs3DataHealth;
  functionalData: Fs3DataFunctional;
  //activity: Activity;
  // input: string;
  // functionalAbility: number;
  // created_at: Date;
  // updated_at: Date;
}
