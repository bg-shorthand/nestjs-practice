import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VomsModule } from './voms/voms.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/voms'), VomsModule],
})
export class AppModule {}
