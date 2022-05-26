import { AuthDto } from 'src/auth/dto/auth.dto';
import { CreateUserDto } from 'src/auth/dto/createuser.dto';
import { User } from 'src/entities/user.entity';

export interface AuthRepository {
  validateUser(user: AuthDto): Promise<User>;
  createUser(auth: CreateUserDto, salt: string, hash: string): Promise<User>;
  getUser(id: number): Promise<User>;
}
