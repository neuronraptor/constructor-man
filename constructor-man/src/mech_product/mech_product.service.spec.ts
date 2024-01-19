import { Test, TestingModule } from '@nestjs/testing';
import { MechProductService } from './mech_product.service';

describe('MechProductService', () => {
  let service: MechProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechProductService],
    }).compile();

    service = module.get<MechProductService>(MechProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
