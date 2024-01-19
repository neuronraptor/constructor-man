import { Test, TestingModule } from '@nestjs/testing';
import { MechProductController } from './mech_product.controller';
import { MechProductService } from './mech_product.service';

describe('MechProductController', () => {
  let controller: MechProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MechProductController],
      providers: [MechProductService],
    }).compile();

    controller = module.get<MechProductController>(MechProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
