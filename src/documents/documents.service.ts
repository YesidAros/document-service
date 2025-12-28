import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentEntity } from './schemas/document.schema';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel(DocumentEntity.name)
    private documentModel: Model<DocumentEntity>,
  ) {}

  create(dto: CreateDocumentDto) {
    return this.documentModel.create(dto);
  }

  findAll() {
    return this.documentModel.find().exec();
  }

  findOne(id: string) {
    return this.documentModel.findById(id);
  }

  update(id: string, dto: UpdateDocumentDto) {
    return this.documentModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.documentModel.findByIdAndDelete(id);
  }
}
