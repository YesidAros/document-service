import { Module } from '@nestjs/common';
//import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb://localhost:27017/documents'),
    DocumentsModule,
  ],
})
export class AppModule {}
