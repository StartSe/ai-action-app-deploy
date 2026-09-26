# Entrevistadora IA

A triagem inicial de candidatos consome horas da equipe. Entrevista o candidato por voz a partir da vaga e entrega um parecer técnico e cultural para o gestor decidir.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-entrevista-ia)

**Exige plano pago no serviço de hospedagem** (standard) e cria um disco de 1 GB em `/app/data`, onde ficam a configuração, a conta, as vagas, os candidatos e as entrevistas.


Imagem: `ghcr.io/startse/entrevista-ia:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3003:10000 -v entrevista-ia-dados:/app/data ghcr.io/startse/entrevista-ia:latest
# depois abra http://localhost:3003
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
