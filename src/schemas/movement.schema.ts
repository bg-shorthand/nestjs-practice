import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MovementsDocument = Movements & Document;

@Schema()
class Movement {
  [store: string]: number;
}

@Schema()
export class MovementData {
  @Prop()
  name: string;

  @Prop()
  coodinate: number[];

  @Prop()
  total: number;

  @Prop()
  movement: Movement;
}

@Schema()
export class Movements {
  @Prop()
  date: number;

  @Prop()
  dummyData: MovementData[];
}

export const MovementSchema = SchemaFactory.createForClass(Movements);
