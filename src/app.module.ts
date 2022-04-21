import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VomsModule } from './voms/voms.module';
import { GenderModule } from './gender/gender.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/db'),
    VomsModule,
    GenderModule,
  ],
})
export class AppModule {}
