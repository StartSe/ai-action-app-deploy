# Vídeos de Campanha

Produzir um vídeo curto para cada campanha leva semanas entre agência, aprovação e ajustes, e gastar créditos de geração sem saber o que vai sair custa caro. A partir do briefing e da imagem do produto, propõe três conceitos com roteiro por cena, efeito sugerido e legendas por rede, para escolher antes de gerar o vídeo.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-videos-campanha)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam a configuração feita em /setup, a conta, as campanhas e os projetos e assets do Creative Flow.

Imagem: `ghcr.io/startse/videos-campanha:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3017:10000 -v videos-campanha-dados:/app/data ghcr.io/startse/videos-campanha:latest
# depois abra http://localhost:3017
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
