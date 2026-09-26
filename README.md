# Radar de Sinais — v0.4.0

Movimentos do mercado chegam tarde e dispersos. Desdobra palavras-chave em buscas, acompanha fontes diariamente em segundo plano e conecta sinais, leituras e artigos em um grafo com histórico e memória por radar.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-radar-sinais)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam configuração, conta, radares, fontes, análises, destaques, conversas e histórico de execuções.


Imagem: `ghcr.io/startse/radar-sinais:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3011:10000 -v radar-sinais-dados:/app/data ghcr.io/startse/radar-sinais:latest
# depois abra http://localhost:3011
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
