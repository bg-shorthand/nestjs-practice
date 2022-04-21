import { Controller, Get, Param, Query } from '@nestjs/common';
import { AgeService } from './age.service';

@Controller('Ages')
export class AgeController {
  constructor(private readonly ageService: AgeService) {}

  @Get()
  findAll() {
    return this.ageService.findAll();
  }

  @Get('/:storeName')
  findData(
    @Param('storeName') storeName: string,
    @Query('startMs') startMs: number,
    @Query('endMs') endMs: number,
  ) {
    return this.ageService.findDataWithNameAndPeriod(storeName, startMs, endMs);
  }
}
