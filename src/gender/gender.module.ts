import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Genders, GenderSchema } from 'src/schemas/gender.schema';
import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genders.name, schema: GenderSchema }]),
  ],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
