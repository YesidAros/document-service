# Document Service - Design

## 1. Overview

Este servicio implementa un gestor de documentos orientado a entornos empresariales.
Permite almacenar, versionar y controlar el acceso a documentos mediante un modelo
basado en roles y permisos (ACL).

El sistema está diseñado como un microservicio en NestJS, utilizando MongoDB
como base de datos orientada a documentos y siguiendo principios de escalabilidad,
seguridad y mantenibilidad.

El objetivo principal es exponer una API REST que permita:
- Crear y versionar documentos
- Controlar el acceso a los documentos por usuario o rol
- Mantener auditoría de acciones
- Aplicar políticas de retención y borrado

## 2. Alcance del sistema

El sistema permitirá:

- Registrar documentos y sus versiones
- Asociar metadatos y clasificación (taxonomía)
- Definir permisos de lectura y escritura por documento
- Auditar acciones realizadas sobre los documentos
- Aplicar políticas de retención y eliminación

Fuera del alcance:
- Autenticación real de usuarios (se asume JWT válido)
- Interfaz gráfica (frontend)
- Integración real con almacenamiento externo (S3, GCS, etc.)

## 3. Modelo de Datos

Entidades principales: 

- Document
- DocumentVersion
- AuditLog

Document: 
Representa el documento lógico, independiente del archivo físico almacenado.

| Campo            | Qué es                  | Por qué existe          |
| ---------------- | ----------------------- | ----------------------- |
| `_id`            | ID del documento        | Identificador único     |
| `title`          | Nombre del documento    | Mostrar al usuario      |
| `description`    | Descripción opcional    | Contexto                |
| `taxonomy`       | Clasificación           | Organizar documentos    |
| `currentVersion` | Versión activa          | Saber cuál es la actual |
| `acl`            | Control de accesos      | Seguridad               |
| `retention`      | Política de retención   | Borrado automático      |
| `createdAt`      | Fecha creación          | Auditoría               |
| `updatedAt`      | Última modificación     | Auditoría               |
| `deletedAt`      | Fecha de borrado lógico | Soft delete             |

DocumentVersion: 
Representa una versión específica de un documento.
| Campo        | Significado                |
| ------------ | -------------------------- |
| `_id`        | ID de la versión           |
| `documentId` | A qué documento pertenece  |
| `version`    | Número de versión (1,2,3…) |
| `filename`   | Nombre original            |
| `mimeType`   | Tipo de archivo            |
| `size`       | Tamaño                     |
| `storageKey` | Dónde está guardado        |
| `createdBy`  | Usuario que subió          |
| `createdAt`  | Fecha de carga             |

AuditLog:
Registra eventos relevantes para auditoría y trazabilidad.
| Campo        | Uso                          |
| ------------ | ---------------------------- |
| `_id`        | Identificador                |
| `action`     | create, update, delete, view |
| `entityType` | document / version           |
| `entityId`   | ID afectado                  |
| `actorId`    | Quién hizo la acción         |
| `timestamp`  | Cuándo ocurrió               |
| `result`     | success / denied             |
| `ip`         | IP de origen                 |

