# chatpdf

Asistente que responde preguntas sobre documentos propios **citando las fuentes** (RAG) y que puede ejecutar acciones mediante herramientas (function calling), con permisos validados en el backend.

> Proyecto en construcción. Este README se actualiza en cada fase.

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React + TypeScript (Vite) |
| Backend | Python + FastAPI |
| Base de datos | PostgreSQL + pgvector |
| Cola de tareas | Celery + Redis |
| IA | API de Anthropic |
| Contenedores | Docker + docker-compose |
| CI/CD | GitHub Actions |
| Despliegue | Railway |
| Tests | pytest (backend), Vitest (frontend) |

## Estado

- [ ] Semana 1 — Esqueleto, CI, despliegue
- [ ] Semana 2 — Documentos, troceado, cola
- [ ] Semana 3 — RAG
- [ ] Semana 4 — Agente con tools y JWT
- [ ] Semana 5 — Observabilidad y demo

## Configuración local

1. Copia `.env.example` a `.env` y rellena los valores.
2. _(se completará al añadir docker-compose)_
