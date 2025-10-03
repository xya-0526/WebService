import { Injectable } from '@nestjs/common';
// import { CreateUploadDto } from './dto/create-upload.dto';
@Injectable()
export class UploadService {
  create(Dto: Express.Multer.File) {
    console.log(Dto);
    return {
      code: 201,
      avatar_url: Dto.filename,
    };
  }
}
