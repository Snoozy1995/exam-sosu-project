import { AuthDto } from 'src/auth/dto/auth.dto';
import { AuthRepository } from 'src/domain/borders/auth.repository';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

export class ValidateUserInteractor {
  constructor(private readonly authRepository: AuthRepository) {}

  public async validateUser(user: AuthDto): Promise<User> {
    const _user = await this.authRepository.validateUser(user);
    if (!_user) return null;
    const hash = await bcrypt.hash(user.password, _user.salt);
    if (_user.password != hash) return null;
    return _user;
  }
}
