# PDI do Time — v0.1.0

O líder chega à conversa de feedback sem um plano de desenvolvimento pronto. Cruza as entregas da pessoa com os objetivos da empresa e gera um PDI de 90 dias.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-pdi-time)

**Exige plano pago no serviço de hospedagem** (0.5c-512mb) e cria um disco de 1 GB em `/app/data`, onde ficam a conta, as configurações, os PDIs, as entregas, as autoavaliações e os check-ins.


Imagem: `ghcr.io/startse/pdi-time:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3001:10000 -v pdi-time-dados:/app/data ghcr.io/startse/pdi-time:latest
# depois abra http://localhost:3001
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
