import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../../domain/borders/auth.repository';
import { User } from 'src/entities/user.entity';
import { AuthDto } from 'src/auth/dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/auth/dto/createuser.dto';
import { UserDto } from 'src/auth/dto/user.dto';

@Injectable()
export class AuthRepositoryAdapter implements AuthRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(User);
  }

  getUser(id: number): Promise<User> {
    return this.userRepo.findOne({ id: id });
  }

  async validateUser(auth: AuthDto): Promise<User> {
    //@todo move encryption code elsewhere
    const user = await this.userRepo.findOne({
      username: auth.username,
    });
    if (!user) return null;
    const hash = await bcrypt.hash(auth.password, user.salt);
    if (user.password != hash) return null;
    return user;
  }

  async createUser(auth: CreateUserDto): Promise<User> {
    //@todo move encryption code elsewhere
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(auth.password, salt);
    return this.userRepo.save({
      username: auth.username,
      salt: salt,
      role: auth.role,
      password: hash,
    });
  }
}
