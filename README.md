# AutoML

A empresa tem histórico de vendas, clientes e pagamentos em planilha, mas prever o que vem pela frente depende de um cientista de dados que ela não tem. Lê a planilha, treina sozinho modelos de classificação, regressão e previsão de séries, escolhe o melhor e explica em português o que pesa no resultado — de quanto esperar de vendas e demanda a quem está prestes a cancelar e quais contas têm risco de atraso.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-automl-pocket)

**Exige plano pago no serviço de hospedagem** (standard) e cria um disco de 1 GB em `/app/data`, onde ficam planilhas, modelos e a conta.

Imagem: `ghcr.io/startse/automl-pocket:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3018:10000 -v automl-pocket-dados:/app/data ghcr.io/startse/automl-pocket:latest
# depois abra http://localhost:3018
```

Abra o app e crie sua conta (nome, e-mail e senha). Não há IA para conectar: a planilha de exemplo já aparece pronta em Datasets e o treino roda dentro do próprio app. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
