# Prospecção com IA — v0.7.0

Cada busca de leads recomeça do zero, sem perfil salvo, evidência ou estratégia antes da mensagem. Pesquisa empresas e pessoas pelo perfil ideal salvo, qualifica com evidências e sinais públicos, e escreve a estratégia e as mensagens da abordagem.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-prospeccao-ia)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam a configuração, a conta, os produtos, os perfis de cliente, as prospecções e os leads.


Imagem: `ghcr.io/startse/prospeccao-ia:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3005:10000 -v prospeccao-ia-dados:/app/data ghcr.io/startse/prospeccao-ia:latest
# depois abra http://localhost:3005
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
