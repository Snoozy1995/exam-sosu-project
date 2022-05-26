import {Test} from '@nestjs/testing';
import {FindAllFS3Interactor} from "./findAllFS3.interactor";
import {FS3} from "../../../entities/fs3.entity";
import {FS3RepositoryAdapter} from "../../../infrastructure/typeorm/fs3Repository.adapter";
import {FS3Repository} from "../../borders/fs3.repository";

describe('FindAllFS3Interactor', () => {
    let findAllFS3Interactor: FindAllFS3Interactor;

    const repo = 'FS3Repository';
    const inject = { inject: [repo] };

    const fs3Array = [
        new FS3(),
        new FS3(),
        new FS3(),
    ];


    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                {
                    ...inject,
                    provide: FindAllFS3Interactor,
                    useFactory: (FS3Repo: FS3Repository) => new FindAllFS3Interactor(FS3Repo),
                },

                {
                    provide: 'FS3Repository',
                    useValue: {
                        findAll: jest.fn().mockResolvedValue(fs3Array),

                    },
                }
            ],
        }).compile();

        findAllFS3Interactor = module.get<FindAllFS3Interactor>(FindAllFS3Interactor);
    });

    describe('findAllFS3', () => {
        it('should return an array of fs3s', async () => {
            const fs3s = await findAllFS3Interactor.findAllFS3();
            expect(fs3s).toEqual(fs3Array);
        });
    });
});
