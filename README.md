# Voz do Cliente

Centenas de comentários de clientes que ninguém consegue ler. Agrupa por tema, mede o sentimento e o NPS e prioriza o que fazer.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-voz-do-cliente)


Imagem: `ghcr.io/startse/voz-do-cliente:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3010:10000 -v voz-do-cliente-dados:/app/data ghcr.io/startse/voz-do-cliente:latest
# depois abra http://localhost:3010
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
