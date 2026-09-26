# Painel Pronto

O gestor sabe o que quer acompanhar, mas não sabe quais indicadores pedir nem como montar o painel. Identifica o setor do pedido, escolhe os indicadores certos, monta os gráficos e preenche com números de exemplo do mercado brasileiro.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-toolkit-dash-builder)


Imagem: `ghcr.io/startse/toolkit-dash-builder:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3024:10000 -v toolkit-dash-builder-dados:/app/data ghcr.io/startse/toolkit-dash-builder:latest
# depois abra http://localhost:3024
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
