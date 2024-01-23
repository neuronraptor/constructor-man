import { PartialType } from '@nestjs/mapped-types';
import { CreateMechProductComponentDto } from './create-mech_product_component.dto';

export class UpdateMechProductComponentDto extends PartialType(
  CreateMechProductComponentDto,
) {}
