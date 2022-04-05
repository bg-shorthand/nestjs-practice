import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VomDocument = Vom & Document;

@Schema()
class Store {
  @Prop()
  name: string;

  @Prop()
  coodinate: number[];

  @Prop()
  size: 's' | 'm' | 'l';
}

@Schema()
export class Vom {
  @Prop()
  background: string;

  @Prop()
  stores: Store[];
}

export const VomSchema = SchemaFactory.createForClass(Vom);
