import { CreateUserDto } from 'src/auth/dto/createuser.dto';
import { AuthRepository } from 'src/domain/borders/auth.repository';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';

export class CreateUserInteractor {
  constructor(private readonly authRepository: AuthRepository) {}

  public async createUser(user: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    return this.authRepository.createUser(user, salt, hash);
  }
}
