# Follow-up de Decisão

A decisão foi tomada na reunião e ninguém sabe se saiu do papel. Cadastra as ações combinadas (ou extrai da ata colada, sem inventar dono nem prazo) e cobra automaticamente quem ainda deve algo antes do prazo vencer.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-follow-up-de-decisao)


Imagem: `ghcr.io/startse/follow-up-de-decisao:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3026:10000 -v follow-up-de-decisao-dados:/app/data ghcr.io/startse/follow-up-de-decisao:latest
# depois abra http://localhost:3026
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
