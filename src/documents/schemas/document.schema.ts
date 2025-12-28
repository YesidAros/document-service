import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

@Schema({ timestamps: true })
export class DocumentEntity extends MongooseDocument {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({
    type: {
      domain: String,
      category: String,
      type: String,
    },
    _id: false,
  })
  taxonomy: {
    domain: string;
    category: string;
    type: string;
  };

  @Prop({ required: true })
  currentVersion: number;

  @Prop({
    type: {
      owners: [String],
      readers: [String],
      editors: [String],
    },
    _id: false,
  })
  acl: {
    owners: string[];
    readers: string[];
    editors: string[];
  };

  @Prop({
    type: {
      deleteAt: Date,
      mode: {
        type: String,
        enum: ['SOFT', 'HARD'],
      },
    },
    _id: false,
  })
  retention: {
    deleteAt?: Date;
    mode?: 'SOFT' | 'HARD';
  };

  @Prop()
  deletedAt?: Date;
}

export const DocumentSchema = SchemaFactory.createForClass(DocumentEntity);
