# Entrevistadora IA

A triagem inicial de candidatos consome horas da equipe. Conduz a entrevista por voz e texto e entrega um scorecard para o gestor.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-entrevista-ia)

Imagem: `ghcr.io/startse/entrevista-ia:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3003:10000 -v entrevista-ia-dados:/app/data ghcr.io/startse/entrevista-ia:latest
# depois abra http://localhost:3003
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
