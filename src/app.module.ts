import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtverifyModule } from './JWT/JWTverify.module';
import { AvatarModule } from './avatar/avatar.module';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { ArticalModule } from './artical/artical.module';
import { ProductionModule } from './production/production.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 让配置全局可用
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: config.get<'postgres'>('DB_TYPE'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        database: config.get<string>('DB_NAME'),
        //entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件（不建议）
        synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库(生产环境不太建议,开发环境可以)
        retryDelay: 500, //重试连接数据库间隔
        retryAttempts: 10, //重试连接数据库的次数
        autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组
        logging: true, // 开启日志
      }),
    }),
    AuthModule,
    JwtverifyModule,
    UserModule,
    AvatarModule,
    UploadModule,
    ArticalModule,
    ProductionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
