# Daily Second Brain — v1.5.0

Conhecimento, decisões e ideias ficam dispersos e difíceis de recuperar. Coleta informações por instrução em segundo plano, organiza uma wiki Markdown conectada e cria briefings, planos e insights com referências.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-daily-second-brain)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam fontes originais, wiki, artefatos, conversas, revisões, fila de coletas, agendamentos, conta e credenciais.


Imagem: `ghcr.io/startse/daily-second-brain:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3020:10000 -v daily-second-brain-dados:/app/data ghcr.io/startse/daily-second-brain:latest
# depois abra http://localhost:3020
```

Crie sua conta e siga Ajustes → Primeiros passos: conecte e teste sua IA, depois insira um texto ou conecte um aplicativo. Entrada reúne fontes e coletas; Biblioteca reúne wiki, mapa e artefatos. Zapier, regras personalizadas e voz são opcionais. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
