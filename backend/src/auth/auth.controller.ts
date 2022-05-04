import { Body, Controller, Get, Inject, Post, Session } from '@nestjs/common';
import { ValidateUserInteractor } from 'src/domain/use_cases/user/validateUser.interactor';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { AuthDto } from './dto/auth.dto';
import { CreateUserInteractor } from 'src/domain/use_cases/user/createUser.interactor';
import { CreateUserDto } from './dto/createuser.dto';
import { GetMyUserInteractor } from 'src/domain/use_cases/user/getMyUser.interactor';
import { UserDto } from './dto/user.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('Login') private readonly login: ValidateUserInteractor,
    @Inject('CreateUser') private readonly create: CreateUserInteractor,
    @Inject('GetMyUser') private readonly get: GetMyUserInteractor,
  ) {}

  @Post()
  async auth(
    @Body() body: AuthDto,
    @Session() session: Record<string, any>,
  ): Promise<UserDto> {
    const user = await this.login.validateUser(body);
    if (!user || !user.id) return null;
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
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.create.createUser(body);
  }

  @Get()
  async getMyUser(@Session() session: Record<string, any>): Promise<UserDto> {
    if (!session.loggedIn || !session.loggedIn.id) return null;
    const user = await this.get.getMyUser(session.loggedIn.id);
    if (!user || !user.id) return null;
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
    if (!session.loggedIn || !session.loggedIn.id) return null;
    session.loggedIn = undefined;
  }
}