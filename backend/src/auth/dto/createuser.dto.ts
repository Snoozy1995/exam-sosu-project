import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/enums/role.enum';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  schoolName: string;
}
