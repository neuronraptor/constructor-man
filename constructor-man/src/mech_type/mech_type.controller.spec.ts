import { Test, TestingModule } from '@nestjs/testing';
import { MechTypeController } from './mech_type.controller';
import { MechTypeService } from './mech_type.service';

describe('MechTypeController', () => {
  let controller: MechTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechTypeController],
      providers: [MechTypeService],
    }).compile();

    controller = module.get<MechTypeController>(MechTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
