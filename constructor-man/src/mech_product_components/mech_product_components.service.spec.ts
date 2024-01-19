import { Test, TestingModule } from '@nestjs/testing';
import { MechProductComponentsService } from './mech_product_components.service';

describe('MechProductComponentsService', () => {
  let service: MechProductComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechProductComponentsService],
    }).compile();

    service = module.get<MechProductComponentsService>(MechProductComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
