import { Test, TestingModule } from '@nestjs/testing';
import { VomsController } from './voms.controller';

describe('VomsController', () => {
  let controller: VomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VomsController],
    }).compile();

    controller = module.get<VomsController>(VomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
