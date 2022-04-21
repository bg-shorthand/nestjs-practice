import { Controller, Get, Param, Query } from '@nestjs/common';
import { GenderService } from './gender.service';

@Controller('genders')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Get()
  findAll() {
    console.log('findAll');
    return this.genderService.findAll();
  }

  @Get('/:storeName')
  findData(
    @Param('storeName') storeName: string,
    @Query('startMs') startMs: number,
    @Query('endMs') endMs: number,
  ) {
    return this.genderService.findDataWithNameAndPeriod(
      storeName,
      startMs,
      endMs,
    );
  }
}
