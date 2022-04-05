import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vom, VomSchema } from 'src/schemas/vom.schema';
import { VomsController } from './voms.controller';
import { VomsService } from './voms.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Vom.name, schema: VomSchema }])],
  controllers: [VomsController],
  providers: [VomsService],
})
export class VomsModule {}
