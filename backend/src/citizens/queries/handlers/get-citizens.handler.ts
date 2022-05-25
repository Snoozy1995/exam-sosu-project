import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllCitizenInteractor } from 'src/domain/use_cases/citizen/findAllCitizen.interactor';
import { GetCitizensQuery } from '../impl';

@QueryHandler(GetCitizensQuery)
export class GetCitizensHandler implements IQueryHandler<GetCitizensQuery> {
  constructor(
    @Inject('FindAllCitizen')
    private readonly findAllCitizen: FindAllCitizenInteractor,
  ) {}

  async execute(_query: GetCitizensQuery) {
    return this.findAllCitizen.findAllCitizen();
  }
}
