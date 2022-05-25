import { Inject } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SearchCitizenInteractor } from '../domain/use_cases/citizen/searchCitizens.interactor';
import { Citizen } from '../entities/citizen.entity';
import { CitizenUpdatedEvent } from './events/citizen-updated.event';
import { OnEvent } from '@nestjs/event-emitter';
import { UploadEvent } from 'src/upload/events/upload.event';

@WebSocketGateway({
  cors: true,
})
export class CitizensGateway {
  constructor(
    @Inject('SearchCitizen')
    private readonly searchCitizen: SearchCitizenInteractor,
  ) {}
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('search')
  findAll(@MessageBody() data: string): Promise<Citizen[]> {
    return this.searchCitizen.searchCitizens(data);
  }

  @OnEvent('citizen.updated')
  handleCitizenUpdatedEvent(payload: CitizenUpdatedEvent) {
    this.server.emit('citizenUpdate', payload.citizen);
  }

  @OnEvent('upload')
  handleUploadEvent(payload: UploadEvent) {
    this.server.emit('upload', payload);
  }
}
