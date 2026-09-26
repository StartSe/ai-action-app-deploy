# Cowork Jev — v0.5.1

Transformar dados em predições e decisões financeiras exige análises e cenários refeitos à mão. Seu estrategista cria predições baseadas em dados e explora cenários financeiros, com premissas visíveis, cálculos verificáveis e decisões conferidas pelo Jev.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-predictive-harness)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam planilhas, premissas por produto, conversas, decisões do harness, conta e credenciais.


Imagem: `ghcr.io/startse/predictive-harness:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3022:10000 -v predictive-harness-dados:/app/data ghcr.io/startse/predictive-harness:latest
# depois abra http://localhost:3022
```

Crie sua conta e explore a escola de negócios de exemplo: contribuição por turma, cenário de nova turma, meta reversa de marketing e ponto de equilíbrio. Em Configurações conecte o ChatGPT e o OpenRouter (o Jev vive nele). Em Fontes de dados, importe XLSX ou CSV (até 20 MB), confirme o papel das colunas e selecione as fontes da conversa. O histórico tem busca e conversas fixadas; premissas ficam no painel retrátil. Configure a ElevenLabs para conversar por voz ao vivo. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
