# Posts em Minutos

Há o que dizer, mas não há tempo de escrever para cada rede. Escreve o post para LinkedIn, Instagram e X a partir de um briefing curto e gera a imagem.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-posts-sociais)


Imagem: `ghcr.io/startse/posts-sociais:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3004:10000 -v posts-sociais-dados:/app/data ghcr.io/startse/posts-sociais:latest
# depois abra http://localhost:3004
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
