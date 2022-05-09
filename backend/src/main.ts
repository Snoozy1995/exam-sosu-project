import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as sessionStore from 'express-session-rsdb';
import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Health Journal')
    .setDescription('The health journal API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document); //
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://185.196.21.189:3090',
      'http://185.196.21.189:3091',
      'http://185.196.21.189:4090',
      'http://185.196.21.189:4091',
      '185.196.21.189:3091',
      '185.196.21.189:4091',
    ],
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });
  app.useWebSocketAdapter(new WsAdapter(app));
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 30, //30mins
      },
      store: new sessionStore({
        data_storage_area: './session/rsdb',
      }),
    }),
  );
  await app.listen(3000);
}
bootstrap();
