import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MechException } from 'src/common-error/MechException';
import { MechExceptionFilter } from 'src/common-error/MechExceptionFilter';
import { CreateMechProductDto } from './dto/create-mech_product.dto';
import { UpdateMechProductDto } from './dto/update-mech_product.dto';
import { MechProductService } from './mech_product.service';

@ApiTags('mech_product')
// @UseFilters(MechExceptionFilter)
@Controller('mech-product')
export class MechProductController {
  constructor(private readonly mechProductService: MechProductService) {}

  @ApiOperation({ summary: 'Create MechProduct object' })
  @Post()
  async create(@Body() dto: CreateMechProductDto) {
    await this.assertValidDto(dto);

    try {
      return this.mechProductService.create(dto);
    } catch (error) {
      throw new MechException(error.message);
    }
  }

  async assertValidDto(dto: CreateMechProductDto) {
    if (!dto.code || dto.code == undefined) {
      throw new MechException('Product code must be specified');
    }
    if (!dto.title || dto.title == undefined) {
      throw new MechException('Product title must be specified');
    }
  }

  @ApiOperation({ summary: 'Retreive MechProduct object collection' })
  @Get()
  findAll() {
    return this.mechProductService.findAll();
  }

  @ApiOperation({ summary: 'Find MechProduct object with specified id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechProductService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update MechProduct object with specified id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMechProductDto: UpdateMechProductDto,
  ) {
    return this.mechProductService.update(+id, updateMechProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechProductService.remove(+id);
  }
}
