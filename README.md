# Bússola de IA — v0.3.1

O gestor precisa acompanhar assessments de empresas, áreas e times e transformar as respostas em ações. Ajuda a criar questionários, analisa respostas em seis dimensões e propõe experimentos. O painel acompanha participação, prazos e diagnósticos de cada grupo.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-bussola-ia)

**Exige plano pago no serviço de hospedagem** (0.5c-512mb) e cria um disco de 1 GB em `/app/data`, onde ficam a conta, as configurações, a sessão ChatGPT, os questionários, os assessments, as respostas, os diagnósticos e os planos de ação.


Imagem: `ghcr.io/startse/bussola-ia:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3012:10000 -v bussola-ia-dados:/app/data ghcr.io/startse/bussola-ia:latest
# depois abra http://localhost:3012
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
