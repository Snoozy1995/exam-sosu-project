import { APP_GUARD } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { RolesGuard } from '../roles/roles.guard';
import { CitizensController } from './citizens.controller';
import { CitizensService } from './citizens.service';

describe('CitizensController', () => {
  let controller: CitizensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitizensController],
      providers: [
        CitizensService,
        {
          provide: APP_GUARD,
          useClass: RolesGuard,
        },
      ],
    }).compile();

    controller = module.get<CitizensController>(CitizensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
