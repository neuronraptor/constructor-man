import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMechProductDto {
  @ApiProperty({ description: 'Product title', nullable: false })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    description: 'Code - is a Product breif title',
    nullable: true,
    required: false,
  })
  @IsNotEmpty()
  readonly code?: string;

  @ApiProperty({
    description: 'Product description',
    nullable: true,
    required: false,
  })
  readonly description?: string;
}
