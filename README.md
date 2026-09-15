# Radar de Sinais

Movimentos do mercado chegam tarde e dispersos. Busca o que saiu no período sobre os temas acompanhados em Hacker News, Reddit, GitHub e na web, agrupa em sinais com fontes verificadas e mostra as conexões.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-radar-sinais)

Imagem: `ghcr.io/startse/radar-sinais:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3011:10000 -v radar-sinais-dados:/app/data ghcr.io/startse/radar-sinais:latest
# depois abra http://localhost:3011
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
