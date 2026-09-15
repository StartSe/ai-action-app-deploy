# Simulador de Vendas

O gestor de vendas não sabe como cada vendedor conduz uma conversa real, só o resultado final. Avalia uma conversa de vendas colada contra 7 critérios de venda consultiva e devolve nota, evidências e como melhorar.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-simulador-vendas)

Imagem: `ghcr.io/startse/simulador-vendas:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3013:10000 -v simulador-vendas-dados:/app/data ghcr.io/startse/simulador-vendas:latest
# depois abra http://localhost:3013
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
