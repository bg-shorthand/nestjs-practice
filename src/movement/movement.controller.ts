import { Controller, Get, Query } from '@nestjs/common';
import { MovementService } from './movement.service';

@Controller('movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  // @Get()
  // findAll() {
  //   return this.movementService.findAll();
  // }

  @Get('/')
  findData(@Query('startMs') startMs: number, @Query('endMs') endMs: number) {
    return this.movementService.findDataWithNameAndPeriod(startMs, endMs);
  }
}
