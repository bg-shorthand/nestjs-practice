import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vom, VomDocument } from 'src/schemas/vom.schema';
import { Model } from 'mongoose';

@Injectable()
export class VomsService {
  constructor(@InjectModel(Vom.name) private vomModel: Model<VomDocument>) {}

  async create(data: Vom): Promise<Vom> {
    const createdVom = new this.vomModel(data);
    return createdVom.save();
  }

  async findAll(): Promise<Vom[]> {
    return this.vomModel.find().exec();
  }

  async update(data: Vom): Promise<any> {
    await this.vomModel.deleteMany();
    const createdVom = new this.vomModel(data);
    return createdVom.save();
  }
}
