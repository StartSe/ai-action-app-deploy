# Classificador de Lançamento

O plano de contas é preenchido no chute e o relatório gerencial não serve pra decisão nenhuma. Classifica lançamentos novos pelo padrão de um histórico já classificado, citando de qual lançamento veio cada categoria e marcando pra revisar o que não tem precedente claro.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-classificador-de-lancamento)


Imagem: `ghcr.io/startse/classificador-de-lancamento:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3025:10000 -v classificador-de-lancamento-dados:/app/data ghcr.io/startse/classificador-de-lancamento:latest
# depois abra http://localhost:3025
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
