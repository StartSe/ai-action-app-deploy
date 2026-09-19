# Bússola de IA

A empresa não sabe em que estágio de maturidade em IA está nem o que fazer a seguir. Coleta as respostas do time por um link, calcula o nível em 6 dimensões e escreve o diagnóstico com forças, lacunas e próximos passos.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-bussola-ia)

Imagem: `ghcr.io/startse/bussola-ia:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3012:10000 -v bussola-ia-dados:/app/data ghcr.io/startse/bussola-ia:latest
# depois abra http://localhost:3012
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
