import { CreateUserDto } from 'src/auth/dto/createuser.dto';
import { AuthRepository } from 'src/domain/borders/auth.repository';
import { User } from 'src/entities/user.entity';

export class CreateUserInteractor {
  constructor(private readonly authRepository: AuthRepository) {}

  public async createUser(user: CreateUserDto): Promise<User> {
    return this.authRepository.createUser(user);
  }
}
