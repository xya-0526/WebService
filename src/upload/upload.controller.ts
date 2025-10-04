import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('/avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  // 类型应该是Express.Multer.File
  createAvatar(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.create(file);
  }
  @Post('/productImage')
  @UseInterceptors(FileInterceptor('productImage'))
  // 类型应该是Express.Multer.File
  createProductImage(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.create(file);
  }
}
