# Build Agentflows — v0.8.1

Tarefas que dependem de várias etapas de IA ficam espalhadas entre conversas e sistemas. Crie fluxos visuais com agentes, decisões, ferramentas e aprovação humana. Teste cada etapa e publique uma versão integrável.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-build-agentflows)

**Exige plano pago no serviço de hospedagem** (starter) e cria um disco de 1 GB em `/app/data`, onde ficam fluxos, versões publicadas, execuções, aprovações pendentes, conta e credenciais.


Imagem: `ghcr.io/startse/build-agentflows:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3019:10000 -v build-agentflows-dados:/app/data ghcr.io/startse/build-agentflows:latest
# depois abra http://localhost:3019
```

Depois de publicar, abra o app e clique em Configurações (`/setup`) para conectar a IA. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
