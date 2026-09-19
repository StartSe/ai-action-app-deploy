# Analista Financeiro

A planilha de despesas chega e não há tempo de destrinchar. Lê o CSV, mostra os números que importam e responde perguntas em linguagem natural.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-financas-ia)

Imagem: `ghcr.io/startse/financas-ia:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3009:10000 -v financas-ia-dados:/app/data ghcr.io/startse/financas-ia:latest
# depois abra http://localhost:3009
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
