# Precificador

O dono do negócio desconfia que está cobrando errado e não sabe em qual item está perdendo dinheiro. Conversa para montar o negócio, lê o corredor de preço de cada item e responde sobre a carteira consultando os números de verdade.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-precificador)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam a conta, as configurações, o negócio, os custos fixos, os canais, os itens com suas fichas e o histórico de preço.


Imagem: `ghcr.io/startse/precificador:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3023:10000 -v precificador-dados:/app/data ghcr.io/startse/precificador:latest
# depois abra http://localhost:3023
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
