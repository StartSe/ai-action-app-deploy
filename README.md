# Agente de Kanban

Operar o quadro de tarefas toma tempo do gestor. Um agente com ferramentas cria, move, comenta e arquiva cartões a partir de comandos em português.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-agente-kanban)

Imagem: `ghcr.io/startse/agente-kanban:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3002:10000 -v agente-kanban-dados:/app/data ghcr.io/startse/agente-kanban:latest
# depois abra http://localhost:3002
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
