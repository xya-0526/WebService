import { AuthDto } from 'src/auth/dto/create-auth.dto';

export class CreateUserDto extends AuthDto {
  email: string;
}
