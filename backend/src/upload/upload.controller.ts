import {
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import * as mime from 'mime';
import { diskStorage } from 'multer';
import * as path from 'path';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@ApiTags('upload')
@Controller('upload')
@UseGuards(AuthenticatedGuard)
export class UploadController {
  @Post()
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './uploads/',
        filename: function (req, file, cb) {
          cb(null, Date.now() + path.extname(file.originalname));
        },
      }),
      fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        if (
          ext !== '.png' &&
          ext !== '.jpg' &&
          ext !== '.gif' &&
          ext !== '.jpeg' &&
          ext !== '.pdf' &&
          ext !== '.docx' &&
          ext !== '.txt' &&
          ext !== '.xlsx'
        ) {
          return callback(new Error('File type not allowed'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 1024 * 1024 * 10,
      },
    }),
  )
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        filename: file.filename,
      };
      response.push(fileReponse);
    });
    return response;
  }
}
