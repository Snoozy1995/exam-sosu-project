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

@WebSocketGateway()
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
}
