# Voice SDR — v0.1.0

Lead novo esfria antes do retorno, a base antiga fica parada e reunião marcada vira falta porque ninguém confirma. Uma SDR por voz liga para o lead, qualifica pelo roteiro da empresa, marca a reunião na agenda do especialista, confirma antes e resgata depois, com transcrição e resumo de cada ligação.

[![Publicar este app](https://img.shields.io/badge/Publicar%20este%20app-1f4fd8?style=for-the-badge)](https://render.com/deploy?repo=https://github.com/StartSe/ai-action-app-deploy/tree/deploy-voice-sdr)


Imagem: `ghcr.io/startse/voice-sdr:latest`

Opção avançada, rodar no seu computador (requer Docker):

```bash
docker run --rm -p 3025:10000 -v voice-sdr-dados:/app/data ghcr.io/startse/voice-sdr:latest
# depois abra http://localhost:3025
```

Abra o app e clique em Instalar pelo painel da StartSe: o painel cria o banco e publica as funções num projeto Supabase seu. Volte ao app, crie a conta de dono e siga o tutorial para ligar a IA, a voz e a telefonia. Catálogo completo: https://startse.github.io/ai-action-app-deploy/
