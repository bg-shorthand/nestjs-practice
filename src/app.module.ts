import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VomsModule } from './voms/voms.module';
import { GenderModule } from './gender/gender.module';
import { AgeModule } from './age/age.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/db'),
    VomsModule,
    GenderModule,
    AgeModule,
  ],
})
export class AppModule {}
