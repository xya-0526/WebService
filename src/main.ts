import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'; //默认express
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
async function bootstrap() {
  const env = process.env.NODE_ENV || 'development';
  console.log(`📌 当前环境：${env}`);
  console.log('🔧 数据库配置：', {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  });
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'images'), {
    prefix: '/xya',
  });
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  app.enableCors({
    origin: '*', // 允许所有来源（开发环境）
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // 如果要携带 cookie，需要改成具体域名 + true
  });
  await app.listen(process.env.PORT ?? port);
}
bootstrap();
