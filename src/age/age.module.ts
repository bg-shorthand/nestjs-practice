import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ages, AgeSchema } from 'src/schemas/age.schema';
import { AgeService } from './age.service';
import { AgeController } from './age.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ages.name, schema: AgeSchema }]),
  ],
  controllers: [AgeController],
  providers: [AgeService],
})
export class AgeModule {}
