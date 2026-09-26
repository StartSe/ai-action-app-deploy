# Atendente no WhatsApp

Perguntas repetidas chegam fora do horário e ninguém acompanha o que foi respondido. Responde texto, áudio e fotos com o conhecimento da empresa, lembra cada cliente, explica cada resposta e avisa quando precisa de uma pessoa.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-whatsapp-atendente)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam a configuração, as conversas e a conta.


Imagem: `ghcr.io/startse/whatsapp-atendente:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3006:10000 -v whatsapp-atendente-dados:/app/data ghcr.io/startse/whatsapp-atendente:latest
# depois abra http://localhost:3006
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA e o número de WhatsApp da empresa. O disco é o que faz a conexão e as conversas continuarem lá depois de cada publicação. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
