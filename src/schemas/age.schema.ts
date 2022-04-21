import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AgesDocument = Ages & Document;

// date: number, total: number, twenty: number, thirty: number, forty: number, fifty: number, sixty: number

@Schema()
export class AgeData {
  @Prop()
  date: number;

  @Prop()
  total: number;

  @Prop()
  twenty: number;

  @Prop()
  thirty: number;

  @Prop()
  forty: number;

  @Prop()
  fifty: number;

  @Prop()
  sixty: number;
}

@Schema()
export class Ages {
  @Prop()
  storeName: string;

  @Prop()
  dummyData: AgeData[];
}

export const AgeSchema = SchemaFactory.createForClass(Ages);
