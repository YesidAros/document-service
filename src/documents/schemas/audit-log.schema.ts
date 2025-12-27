import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class AuditLog extends MongooseDocument {

  @Prop({ required: true })
  action: string; // create, update, delete, view

  @Prop({ required: true })
  entityType: string; // document, version, etc.

  @Prop({ type: Types.ObjectId, required: true })
  entityId: Types.ObjectId;

  @Prop({ required: true })
  actorId: string;

  @Prop({ required: true })
  result: string; // success, denied, error

  @Prop()
  ip?: string;

  @Prop()
  userAgent?: string;
}

export const AuditLogSchema = SchemaFactory.createForClass(AuditLog);
