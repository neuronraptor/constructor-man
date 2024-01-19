import { Test, TestingModule } from '@nestjs/testing';
import { MechComponentController } from './mech_component.controller';
import { MechComponentService } from './mech_component.service';
import { MechTypeModule } from 'src/mech_type/mech_type.module';

describe('MechComponentController', () => {
  let controller: MechComponentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MechTypeModule],
      controllers: [MechComponentController],
      providers: [MechComponentService],
    }).compile();

    controller = module.get<MechComponentController>(MechComponentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
