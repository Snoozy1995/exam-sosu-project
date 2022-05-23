import {AuthDto} from 'src/auth/dto/auth.dto';
import {AuthRepository} from 'src/domain/borders/auth.repository';
import {User} from 'src/entities/user.entity';

export class ValidateUserInteractor {
  constructor(private readonly authRepository: AuthRepository) {}

  public validateUser(user: AuthDto): Promise<User> {
    return this.authRepository.validateUser(user);
  }
}
