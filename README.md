# Mapia — v1.4.3

Vídeos, PDFs e páginas acumulam informação difícil de organizar e aplicar. Transforma fontes em mapas mentais interativos com referências, edição visual e conversa sobre o conteúdo.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-mapify)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam mapas, fontes, conversas, conta e credenciais.


Imagem: `ghcr.io/startse/mapify:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3021:10000 -v mapify-dados:/app/data ghcr.io/startse/mapify:latest
# depois abra http://localhost:3021
```

Crie sua conta e abra Configurações para conectar ChatGPT ou OpenRouter. Em YouTube, valide e salve uma chave do Google AI Studio para analisar vídeos públicos de qualquer canal. Depois, crie um novo mapa com o link do seu vídeo. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
