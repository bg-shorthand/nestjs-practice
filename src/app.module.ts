import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VomsModule } from './voms/voms.module';
import { GenderModule } from './gender/gender.module';
import { AgeModule } from './age/age.module';
import { MovementModule } from './movement/movement.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/db'),
    VomsModule,
    GenderModule,
    AgeModule,
    MovementModule,
  ],
})
export class AppModule {}
