import { Test, TestingModule } from '@nestjs/testing';
import { MechComponentService } from './mech_component.service';
import { MechTypeModule } from 'src/mech_type/mech_type.module';

describe('MechComponentService', () => {
  let service: MechComponentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MechTypeModule],
      providers: [MechComponentService],
    }).compile();

    service = module.get<MechComponentService>(MechComponentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
