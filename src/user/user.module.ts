import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Avatar } from 'src/avatar/entities/avatar.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User, Avatar])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
