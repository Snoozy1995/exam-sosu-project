//import { KillDragonHandler } from './kill-dragon.handler';
import { DeleteCitizenHandler } from './delete-citizen.handler';
import { NewVersionCitizenHandler } from './new-version-citizen.handler';
import { SaveCitizenHandler } from './save-citizen.handler';

export const CommandHandlers = [
  DeleteCitizenHandler,
  SaveCitizenHandler,
  NewVersionCitizenHandler,
];
