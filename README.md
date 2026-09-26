# Orbit — Agente de Kanban — v0.2.0

Operar o quadro de tarefas toma tempo do gestor. Agentes cruzam atividades, conversas e objetivos para manter um quadro local, seguindo a skill do time e rotinas configuráveis. Correções humanas orientam as próximas execuções.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-agente-kanban)


Imagem: `ghcr.io/startse/agente-kanban:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3002:10000 -v agente-kanban-dados:/app/data ghcr.io/startse/agente-kanban:latest
# depois abra http://localhost:3002
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
