# Análise de Perda

"Perdemos por preço" é a resposta padrão do time comercial, e quase nunca é a verdadeira. Lê as notas de perda do CRM em texto livre e agrupa pelo motivo real, com a nota que comprova cada grupo.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-analise-de-perda)


Imagem: `ghcr.io/startse/analise-de-perda:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3024:10000 -v analise-de-perda-dados:/app/data ghcr.io/startse/analise-de-perda:latest
# depois abra http://localhost:3024
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
