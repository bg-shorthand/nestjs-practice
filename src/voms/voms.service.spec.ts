import { Test, TestingModule } from '@nestjs/testing';
import { VomsService } from './voms.service';

describe('VomsService', () => {
  let service: VomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VomsService],
    }).compile();

    service = module.get<VomsService>(VomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
