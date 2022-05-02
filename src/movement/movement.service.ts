import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movements, MovementsDocument } from 'src/schemas/movement.schema';
import { Model } from 'mongoose';

@Injectable()
export class MovementService {
  constructor(
    @InjectModel(Movements.name)
    private movementModel: Model<MovementsDocument>,
  ) {}

  async findAll(): Promise<Movements[]> {
    const data = await this.movementModel.find({});
    return data;
  }

  async findDataWithNameAndPeriod(startMs: number, endMs: number) {
    const storeData = await this.movementModel.find({}).exec();
    return storeData.filter(({ date }) => date >= startMs || date <= endMs);
  }
}
