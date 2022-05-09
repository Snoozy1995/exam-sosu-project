import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Session,
} from '@nestjs/common';
import { ValidateUserInteractor } from 'src/domain/use_cases/user/validateUser.interactor';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { AuthDto } from './dto/auth.dto';
import { CreateUserInteractor } from 'src/domain/use_cases/user/createUser.interactor';
import { CreateUserDto } from './dto/createuser.dto';
import { GetMyUserInteractor } from 'src/domain/use_cases/user/getMyUser.interactor';
import { UserDto } from './dto/user.dto';
import { FindOneSchoolInteractor } from 'src/domain/use_cases/school/findOneSchool.interactor';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('Login') private readonly login: ValidateUserInteractor,
    @Inject('CreateUser') private readonly create: CreateUserInteractor,
    @Inject('GetMyUser') private readonly get: GetMyUserInteractor,
    @Inject('FindOneSchool')
    private readonly findSchool: FindOneSchoolInteractor,
  ) {}

  @Post()
  async auth(
    @Body() body: AuthDto,
    @Session() session: Record<string, any>,
  ): Promise<UserDto> {
    const user = await this.login.validateUser(body);
    if (!user || !user.id) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error:
            'User was not found. Please check your credientials and try again.',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    session.loggedIn = user;
    return {
      username: user.username,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at,
      files: user.files,
      school: user.school,
      classes: user.classes,
      citizens: user.citizens,
    };
  }

  @Post('/create')
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.create.createUser(body);
  }

  @Get()
  async getMyUser(@Session() session: Record<string, any>): Promise<UserDto> {
    if (!session.loggedIn || !session.loggedIn.id) return null;
    const user = await this.get.getMyUser(session.loggedIn.id);
    if (!user || !user.id)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Session was not found. Please login again.',
        },
        HttpStatus.NOT_FOUND,
      );
    return {
      username: user.username,
      role: user.role,
      created_at: user.created_at,
      updated_at: user.updated_at,
      files: user.files,
      school: user.school,
      classes: user.classes,
      citizens: user.citizens,
    };
  }

  @Get('/logout')
  logout(@Session() session: Record<string, any>) {
    if (!session.loggedIn || !session.loggedIn.id)
      return HttpStatus.BAD_REQUEST;
    session.loggedIn = undefined;
    return HttpStatus.ACCEPTED;
  }
}
