# Clone de Site

Montar uma página nova do zero leva semanas entre briefing, agência e ajustes. Lê a captura de uma página de referência e escreve a sua versão em HTML, em português, com o nome e as cores da sua marca.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-clone-site)

Imagem: `ghcr.io/startse/clone-site:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3015:10000 -v clone-site-dados:/app/data ghcr.io/startse/clone-site:latest
# depois abra http://localhost:3015
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
