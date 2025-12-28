import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateDocumentDto {
  title: string;

  description?: string;

  taxonomy?: {
    domain?: string;
    category?: string;
    type?: string;
  };
}
