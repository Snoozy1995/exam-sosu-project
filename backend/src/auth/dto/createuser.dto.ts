import { ApiProperty } from '@nestjs/swagger';
import { School } from 'src/entities/school.entity';
import { Role } from 'src/enums/role.enum';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  school: string | School;
}
