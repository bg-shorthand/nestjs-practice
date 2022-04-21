import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GendersDocument = Genders & Document;

@Schema()
export class GenderData {
  @Prop()
  date: number;

  @Prop()
  total: number;

  @Prop()
  m: number;

  @Prop()
  f: number;
}

@Schema()
export class Genders {
  @Prop()
  storeName: string;

  @Prop()
  dummyData: GenderData[];
}

export const GenderSchema = SchemaFactory.createForClass(Genders);
