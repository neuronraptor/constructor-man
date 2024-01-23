import { PartialType } from '@nestjs/mapped-types';
import { CreateMechProductDto } from './create-mech_product.dto';

export class UpdateMechProductDto extends PartialType(CreateMechProductDto) {}
