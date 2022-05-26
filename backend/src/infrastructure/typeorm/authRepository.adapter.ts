import { EntityManager, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../../domain/borders/auth.repository';
import { User } from 'src/entities/user.entity';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { CreateUserDto } from 'src/auth/dto/createuser.dto';

@Injectable()
export class AuthRepositoryAdapter implements AuthRepository {
  private readonly userRepo: Repository<User>;

  constructor(private readonly em: EntityManager) {
    this.userRepo = em.getRepository(User);
  }

  getUser(id: number): Promise<User> {
    return this.userRepo.findOne({ id: id }, { relations: ['citizens'] });
  }

  async validateUser(auth: AuthDto): Promise<User> {
    return this.userRepo.findOne({
      username: auth.username,
    });
  }

  async createUser(
    auth: CreateUserDto,
    salt: string,
    hash: string,
  ): Promise<User> {
    return this.userRepo.save({
      username: auth.username,
      salt: salt,
      role: auth.role,
      password: hash,
      schoolName: auth.schoolName,
    });
  }
}
