import { Test, TestingModule } from '@nestjs/testing';
import { MechTypeService } from './mech_type.service';

describe('MechTypeService', () => {
  let service: MechTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MechTypeService],
    }).compile();

    service = module.get<MechTypeService>(MechTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
