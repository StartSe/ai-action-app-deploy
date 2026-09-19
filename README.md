# Radar de Sinais

Movimentos do mercado chegam tarde e dispersos. Monitora termos cadastrados na web, gera grafos interativos e envia insights de negócio às 8h, 16h e 20h, com horários configuráveis.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-radar-sinais)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam a configuração, a conta, os termos monitorados, as rotinas e os radares.

Imagem: `ghcr.io/startse/radar-sinais:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3011:10000 -v radar-sinais-dados:/app/data ghcr.io/startse/radar-sinais:latest
# depois abra http://localhost:3011
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
