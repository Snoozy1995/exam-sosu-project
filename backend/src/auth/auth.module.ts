import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from 'src/domain/borders/auth.repository';
import { CreateUserInteractor } from 'src/domain/use_cases/user/createUser.interactor';
import { GetMyUserInteractor } from 'src/domain/use_cases/user/getMyUser.interactor';
import { ValidateUserInteractor } from 'src/domain/use_cases/user/validateUser.interactor';
import { User } from 'src/entities/user.entity';
import { AuthRepositoryAdapter } from 'src/infrastructure/typeorm/authRepository.adapter';
import { AuthController } from './auth.controller';

const repo = 'AuthRepository';
const inject = { inject: [repo] };

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: repo,
      useClass: AuthRepositoryAdapter,
    },
    {
      ...inject,
      provide: 'Login',
      useFactory: (authRepo: AuthRepository) =>
        new ValidateUserInteractor(authRepo),
    },
    {
      ...inject,
      provide: 'CreateUser',
      useFactory: (authRepo: AuthRepository) =>
        new CreateUserInteractor(authRepo),
    },
    {
      ...inject,
      provide: 'GetMyUser',
      useFactory: (authRepo: AuthRepository) =>
        new GetMyUserInteractor(authRepo),
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
