import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genders, GendersDocument } from 'src/schemas/gender.schema';
import { Model } from 'mongoose';

@Injectable()
export class GenderService {
  constructor(
    @InjectModel(Genders.name) private genderModel: Model<GendersDocument>,
  ) {}

  async findAll(): Promise<Genders[]> {
    const data = await this.genderModel.find({});
    return data;
  }

  async findStore(storeName: string) {
    const data = await this.genderModel.findOne({ storeName });
    return data;
  }

  async findDataWithNameAndPeriod(
    storeName: string,
    startMs: number,
    endMs: number,
  ) {
    const storeData = await this.genderModel.findOne({ storeName });
    return storeData.dummyData.filter(
      ({ date }) => date >= startMs && date <= endMs,
    );
  }
}
