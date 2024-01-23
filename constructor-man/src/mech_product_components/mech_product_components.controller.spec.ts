import { Test, TestingModule } from '@nestjs/testing';
import { MechProductComponentsController } from './mech_product_components.controller';
import { MechProductComponentsService } from './mech_product_components.service';
import { MechComponentModule } from 'src/mech_component/mech_component.module';

describe('MechProductComponentsController', () => {
  let controller: MechProductComponentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MechComponentModule],
      controllers: [MechProductComponentsController],
      providers: [MechProductComponentsService],
    }).compile();

    controller = module.get<MechProductComponentsController>(
      MechProductComponentsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
