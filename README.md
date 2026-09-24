# Validador de Regras de Negócio

A ideia de negócio nasce solta, em conversa e anotação dispersa, e ninguém confere se a lógica se sustenta antes de gastar tempo — ou dinheiro — nela. Organiza a ideia descrita em Business Model Canvas e aponta onde a lógica não fecha: segmento e proposta de valor incompatíveis, canal de aquisição que não combina com o ticket médio, estrutura de custo que não é coberta pelo preço declarado.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-validador-regras-negocio)


Imagem: `ghcr.io/startse/validador-regras-negocio:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3016:10000 -v validador-regras-negocio-dados:/app/data ghcr.io/startse/validador-regras-negocio:latest
# depois abra http://localhost:3016
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
