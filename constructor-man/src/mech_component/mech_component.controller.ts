import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MechComponentService } from './mech_component.service';
import { CreateMechComponentDto } from './dto/create-mech_component.dto';
import { UpdateMechComponentDto } from './dto/update-mech_component.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('mech-component')
export class MechComponentController {
  constructor(private readonly mechComponentService: MechComponentService) {}

  @ApiOperation({ description: 'Create new Component' })
  @Post()
  create(@Body() createMechComponentDto: CreateMechComponentDto) {
    return this.mechComponentService.create(createMechComponentDto);
  }

  @ApiOperation({ description: 'Working with global Component collection' })
  @Get()
  findAll() {
    return this.mechComponentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mechComponentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMechComponentDto: UpdateMechComponentDto,
  ) {
    return this.mechComponentService.update(+id, updateMechComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mechComponentService.remove(+id);
  }
}
