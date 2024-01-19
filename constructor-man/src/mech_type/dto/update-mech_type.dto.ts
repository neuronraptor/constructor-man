import { PartialType } from '@nestjs/mapped-types';
import { CreateMechTypeDto } from './create-mech_type.dto';

export class UpdateMechTypeDto extends PartialType(CreateMechTypeDto) {}
