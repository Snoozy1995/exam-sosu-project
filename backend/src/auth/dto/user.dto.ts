import {ApiProperty} from '@nestjs/swagger';
import {Citizen} from 'src/entities/citizen.entity';
import {School} from 'src/entities/school.entity';
import {SchoolClass} from 'src/entities/schoolClass.entity';
import {UploadedDocument} from 'src/entities/uploadedDocument.entity';
import {Role} from 'src/enums/role.enum';

export class UserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty({ type: [UploadedDocument], required: false })
  files: UploadedDocument[];

  @ApiProperty({ type: () => School, required: false })
  school: School;

  @ApiProperty({ type: [SchoolClass], required: false })
  classes: SchoolClass[];

  @ApiProperty({ type: [Citizen], required: false })
  citizens: Citizen[];
}
