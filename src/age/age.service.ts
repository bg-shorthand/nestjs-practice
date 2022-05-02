import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ages, AgesDocument } from 'src/schemas/age.schema';

@Injectable()
export class AgeService {
  constructor(@InjectModel(Ages.name) private AgeModel: Model<AgesDocument>) {}

  async findAll(): Promise<Ages[]> {
    const data = await this.AgeModel.find({});
    return data;
  }

  async findStore(storeName: string) {
    const data = await this.AgeModel.findOne({ storeName });
    return data;
  }

  async findDataWithNameAndPeriod(
    storeName: string,
    startMs: number,
    endMs: number,
  ) {
    const storeData = await this.AgeModel.findOne({ storeName });
    return storeData.dummyData.filter(
      ({ date }) => date >= startMs || date <= endMs,
    );
  }
}
