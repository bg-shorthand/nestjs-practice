import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Vom } from 'src/schemas/vom.schema';
import { VomsService } from './voms.service';

@Controller('voms')
export class VomsController {
  constructor(private readonly vomsService: VomsService) {}

  @Get()
  sayHi() {
    return this.vomsService.findAll();
  }

  @Post()
  setVoms(@Body() data: Vom) {
    return this.vomsService.create(data);
  }

  @Put()
  modifyVoms(@Body() data: Vom) {
    return this.vomsService.update(data);
  }
}
