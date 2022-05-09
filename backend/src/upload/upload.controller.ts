import {
  Body,
  Controller,
  Inject,
  Post,
  Session,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import * as path from 'path';
import { SaveFilesInteractor } from 'src/domain/use_cases/upload/saveFiles.interactor';
import { UploadedDocument } from 'src/entities/uploadedDocument.entity';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

@ApiTags('upload')
@Controller('upload')
@UseGuards(AuthenticatedGuard)
export class UploadController {
  constructor(
    @Inject('SaveFiles') private readonly saveFiles: SaveFilesInteractor,
  ) {}

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
  uploadFile(
    @Body() body: any,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Session() session: Record<string, any>,
  ) {
    console.log(body);
    console.log(files);
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        filename: file.filename,
        uploader: session.loggedIn,
        citizens: [{ id: body.citizen }],
        size: file.size,
      };
      response.push(fileReponse as UploadedDocument);
    });
    this.saveFiles.saveFiles(response);
    return response;
  }
}
