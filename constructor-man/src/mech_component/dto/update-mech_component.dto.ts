import { PartialType } from '@nestjs/mapped-types';
import { CreateMechComponentDto } from './create-mech_component.dto';

export class UpdateMechComponentDto extends PartialType(
  CreateMechComponentDto,
) {}
