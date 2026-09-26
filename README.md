# Site Cowork — v0.4.0

Criar, hospedar e melhorar o site exige coordenar criação, tecnologia e estratégia. Seu colaborador cuida da criação, hospedagem e estratégia do site: constrói páginas, ajusta a marca, publica e acompanha métricas para propor melhorias.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-clone-site)

**Exige plano pago no serviço de hospedagem** (0.5c-512mb) e cria um disco de 1 GB em `/app/data`, onde ficam a conta, as configurações, a sessão ChatGPT, os sites, as versões das páginas e as imagens.


Imagem: `ghcr.io/startse/clone-site:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3015:10000 -v clone-site-dados:/app/data ghcr.io/startse/clone-site:latest
# depois abra http://localhost:3015
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
