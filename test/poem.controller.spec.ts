import { Test, TestingModule } from '@nestjs/testing';
import { PoemController } from '../src/poem/poem.controller';

describe('PoemController', () => {
  let controller: PoemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoemController],
    }).compile();

    controller = module.get<PoemController>(PoemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
