# Atendente no WhatsApp

Perguntas repetidas chegam fora do horário e ficam sem resposta. Responde com base no conhecimento da empresa e transfere para uma pessoa quando não sabe.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-whatsapp-atendente)

Imagem: `ghcr.io/startse/whatsapp-atendente:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3006:10000 -v whatsapp-atendente-dados:/app/data ghcr.io/startse/whatsapp-atendente:latest
# depois abra http://localhost:3006
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
