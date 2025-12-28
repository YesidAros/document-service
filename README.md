# Document Service (NestJS + MongoDB)

Backend API para gestión de documentos con versionado, control de acceso y persistencia en MongoDB.

Este proyecto fue desarrollado como parte de una prueba técnica para un proceso de selección. Cubre: diseño de datos, endpoints REST, persistencia con Mongoose, y buenas prácticas estructurales.

---

## Características

- CRUD de documentos
- Versionado de documentos (estructura diseñada)
- Persistencia en MongoDB (Atlas)
- Diseño modular con NestJS
- Validación y estructura de DTOs
- Buenas prácticas en arquitectura

---

## Estructura del proyecto

src/
├── app.module.ts
├── main.ts
├── documents/
│   ├── dto/
│   │   ├── create-document.dto.ts
│   │   └── update-document.dto.ts
│   ├── schemas/
│   │   ├── document.schema.ts
│   │   └── document-version.schema.ts
│   │   └── audit.log.schema.ts
│   ├── documents.controller.ts
│   ├── documents.service.ts
│   └── documents.module.ts
├── audit/
├── common/


## Tecnologías usadas

| Tecnología | Propósito |
|------------|-----------|
| NestJS | Framework backend |
| MongoDB Atlas | Base de datos NoSQL |
| Mongoose | ODM (modelos y esquemas) |
| @nestjs/config | Manejo de variables de entorno |


## Configuración y ejecución

### 1. Clonar el repositorio


git clone https://github.com/YesidAros/document-service.git
cd document-service

### 2. Instalar dependencias
npm install

### 3. archivo de entorno .env
MONGO_URI=<tu_connection_string_de_MongoDB_Atlas>

### 4. Levantar el servidor de desarrollo
npm run start:dev

### 5. Servidor iniciado
http://localhost:3000

## Endpoints Principales

### 1. Crear Documento
POST /documents
{
  "title": "Contrato de prueba",
  "description": "Descripción",
  "taxonomy": {
    "domain": "legal",
    "category": "contratos",
    "type": "servicios"
  }
}


### 2. Listar Documentos
GET /documents

### 3. Obtener Documentos por ID
GET /documents/:id

### 4. Actualizar Documento 
PATCH /documents/:id

{
   "title": "Nuevo título"
}

### 5. Eliminar Documento 
DELETE /documents/:id


## Autor
Yesid Aros