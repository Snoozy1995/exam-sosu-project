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
import { UploadEvent } from './events/upload.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@ApiTags('upload')
@Controller('upload')
@UseGuards(AuthenticatedGuard)
export class UploadController {
  constructor(
    @Inject('SaveFiles') private readonly saveFiles: SaveFilesInteractor,
    private eventEmitter: EventEmitter2,
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
    const response: UploadedDocument[] = [];
    files.forEach((file) => {
      const fileReponse = {
        filename: file.filename,
        originalname: file.originalname,
        uploader: session.loggedIn,
        citizens: [{ id: body.citizen }],
        size: file.size,
      };
      response.push(fileReponse as UploadedDocument);
    });

    const event = new UploadEvent();
    event.citizenId = body.citizen;
    event.uploaded = response;
    this.eventEmitter.emit('upload', event);
    return this.saveFiles.saveFiles(response);
  }
}
