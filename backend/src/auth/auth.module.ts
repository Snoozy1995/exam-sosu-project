import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthRepository} from 'src/domain/borders/auth.repository';
import {SchoolRepository} from 'src/domain/borders/school.repository';
import {FindOneSchoolInteractor} from 'src/domain/use_cases/school/findOneSchool.interactor';
import {CreateUserInteractor} from 'src/domain/use_cases/user/createUser.interactor';
import {GetMyUserInteractor} from 'src/domain/use_cases/user/getMyUser.interactor';
import {ValidateUserInteractor} from 'src/domain/use_cases/user/validateUser.interactor';
import {User} from 'src/entities/user.entity';
import {AuthRepositoryAdapter} from 'src/infrastructure/typeorm/authRepository.adapter';
import {SchoolRepositoryAdapter} from 'src/infrastructure/typeorm/schoolRepository.adapter';
import {AuthController} from './auth.controller';

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
      provide: 'SchoolRepository',
      useClass: SchoolRepositoryAdapter,
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
    {
      inject: ['SchoolRepository'],
      provide: 'FindOneSchool',
      useFactory: (schoolRepo: SchoolRepository) =>
        new FindOneSchoolInteractor(schoolRepo),
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
