import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CitizenUpdatedEvent } from '../events/citizen-updated.event';

@Injectable()
export class CitizenUpdatedListener {
  @OnEvent('citizen.updated')
  handleOrderCreatedEvent(event: CitizenUpdatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}