import {AuthRepository} from 'src/domain/borders/auth.repository';
import {User} from 'src/entities/user.entity';

export class GetMyUserInteractor {
  constructor(private readonly authRepository: AuthRepository) {}

  public getMyUser(id: number): Promise<User> {
    return this.authRepository.getUser(id);
  }
}
