import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMechProductComponentDto } from './dto/create-mech_product_component.dto';
import { MechProductComponentsService } from './mech_product_components.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('mech-product-components')
export class MechProductComponentsController {
  constructor(private readonly mechProductComponentsService: MechProductComponentsService) { }

  @ApiOperation({ description: 'Install a component into another Holder component inside a Product. This operation create a link of this entities' })
  @Post()
  create(@Body() dto: CreateMechProductComponentDto) {
    return this.mechProductComponentsService.create(dto);
  }

  @ApiOperation({ description: 'Return Product Component Links' })
  @Get(':productId')
  findAll(@Param('productId') productId: number) {
    return this.mechProductComponentsService.findAllByProduct(productId);
  }

  @ApiOperation({ description: 'Return Product Component Links' })
  @Get(':productId/tree')
  findProductComponentTree(@Param('productId') productId: number) {
    return this.mechProductComponentsService.findProductComponentTree(productId);
  }

  @ApiOperation({ description: 'Return Component - Product Link information by it\'s ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechProductComponentsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechProductComponentsService.remove(+id);
  }

}
