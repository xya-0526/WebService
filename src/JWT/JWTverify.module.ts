import { Module } from '@nestjs/common';
import { JWTverify } from './JWTverify.strategy';
import { AuthModule } from 'src/auth/auth.module';
import { Jwt } from './JWTverify_J.strategy';
@Module({
  imports: [AuthModule],
  providers: [JWTverify, Jwt],
})
export class JwtverifyModule {}
