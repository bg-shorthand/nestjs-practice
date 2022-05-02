import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Movements, MovementSchema } from 'src/schemas/movement.schema';
import { MovementController } from './movement.controller';
import { MovementService } from './movement.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Movements.name, schema: MovementSchema },
    ]),
  ],
  controllers: [MovementController],
  providers: [MovementService],
})
export class MovementModule {}
