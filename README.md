# Simulador de Vendas

O time só aprende a vender na conversa real, com o cliente de verdade na frente. Faz o papel do cliente numa conversa por voz e depois avalia o vendedor pela metodologia do time, com nota por critério e o trecho da conversa que justifica cada uma.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-simulador-vendas)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam produtos, materiais, treinos, avaliações e configurações cifradas.


Imagem: `ghcr.io/startse/simulador-vendas:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3013:10000 -v simulador-vendas-dados:/app/data ghcr.io/startse/simulador-vendas:latest
# depois abra http://localhost:3013
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
