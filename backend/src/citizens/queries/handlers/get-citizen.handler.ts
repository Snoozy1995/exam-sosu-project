import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindOneCitizenInteractor } from 'src/domain/use_cases/citizen/findOneCitizen.interactor';
import { GetCitizenQuery } from '../impl';

@QueryHandler(GetCitizenQuery)
export class GetCitizenHandler implements IQueryHandler<GetCitizenQuery> {
  constructor(
    @Inject('FindOneCitizen')
    private readonly findOneCitizen: FindOneCitizenInteractor,
  ) {}

  async execute(query: GetCitizenQuery) {
    return this.findOneCitizen.findOneCitizen(query.id);
  }
}
