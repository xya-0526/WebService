import { Module } from '@nestjs/common';
import { ArticalService } from './artical.service';
import { ArticalController } from './artical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artical } from './entities/artical.entity';
import { User } from 'src/user/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Artical, User]), AuthModule],
  controllers: [ArticalController],
  providers: [ArticalService],
})
export class ArticalModule {}
