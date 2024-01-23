import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MechTypeService } from './mech_type.service';
import { CreateMechTypeDto } from './dto/create-mech_type.dto';
import { UpdateMechTypeDto } from './dto/update-mech_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('mech_type')
@Controller('mech-type')
export class MechTypeController {
  constructor(private readonly mechTypeService: MechTypeService) {}

  @ApiOperation({ summary: 'Create MechType declaration' })
  @Post()
  create(@Body() createMechTypeDto: CreateMechTypeDto) {
    return this.mechTypeService.create(createMechTypeDto);
  }

  @ApiOperation({ summary: 'Retreive MechType declaration list' })
  @Get()
  findAll() {
    return this.mechTypeService.findAll();
  }

  @ApiOperation({ summary: 'Find MechType declaration with specified id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update MechType declaration with specified id' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMechTypeDto: UpdateMechTypeDto,
  ) {
    return this.mechTypeService.update(+id, updateMechTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechTypeService.remove(+id);
  }
}
