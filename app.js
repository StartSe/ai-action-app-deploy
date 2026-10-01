// AI Hub · AI Journey — página estática: catálogo, detalhe da solução com o fluxo de publicação no Render
// e convite para ingressar no AI Action em tudo o que está bloqueado. Sem dependências.
(() => {
  const D = window.AI_JOURNEY;
  const conteudo = document.getElementById("conteudo");
  const modal = document.getElementById("modal-acesso");
  const CATEGORIAS = ["Comercial", "Marketing", "Atendimento", "Financeiro", "Operações", "Pessoas"];
  const filtro = { categoria: "Todas", busca: "", ordem: "liberadas" };

  // ---------- Utilidades ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const normalizar = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const urlPublicar = (app) => `https://render.com/deploy?repo=${D.repoDeploy}/tree/deploy-${app.id}`;
  const urlBlueprint = (app) => `${D.repoDeploy}/tree/deploy-${app.id}`;
  const icone = {
    voltar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    externo: '<svg class="ext" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/></svg>',
    busca: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/></svg>',
    filtros: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>',
  };
  const ferrRender = '<span class="ferr"><img src="img/render.svg" alt="">Render</span>';
  const ferrOpenRouter = '<span class="ferr"><img src="img/openrouter.svg" alt="">OpenRouter</span>';
  const ferrElevenLabs = '<span class="ferr"><img src="img/elevenlabs.svg" alt="">ElevenLabs</span>';

  // Progresso de cada solução fica só neste navegador (conveniência; nada depende disso).
  const chave = (id) => `ai-journey:${id}`;
  function lerProgresso(app) {
    let p = null;
    try { p = JSON.parse(localStorage.getItem(chave(app.id)) || "null"); } catch { /* sem storage */ }
    return { passos: app.roteiro.map((_, i) => Boolean(p?.passos?.[i])), url: p?.url || "" };
  }
  function salvarProgresso(app, p) {
    try { localStorage.setItem(chave(app.id), JSON.stringify(p)); } catch { /* sem storage */ }
  }
  function situacao(app) {
    const p = lerProgresso(app);
    const feitos = p.passos.filter(Boolean).length;
    if (feitos === p.passos.length) return { tipo: "ok", texto: "Implantada", feitos };
    if (feitos > 0 || p.url) return { tipo: "andamento", texto: `Em andamento · ${feitos}/${p.passos.length}`, feitos };
    return { tipo: "", texto: "", feitos };
  }

  // ---------- Modal de acesso ----------
  document.getElementById("modal-cta").href = D.ingressarUrl;
  document.getElementById("modal-checkout").href = D.checkoutUrl;
  document.getElementById("cupom-checkout").href = D.checkoutUrl;
  document.getElementById("copiar-cupom").addEventListener("click", async () => {
    const rotulo = document.getElementById("copiar-rotulo");
    try { await navigator.clipboard.writeText(D.cupom); rotulo.textContent = "Copiado!"; }
    catch { rotulo.textContent = "Selecione e copie"; }
    setTimeout(() => { rotulo.textContent = "Copiar"; }, 2000);
  });
  function abrirConvite(origem) {
    document.getElementById("modal-origem").textContent = origem ? `${origem} · disponível no AI Action` : "Disponível no AI Action";
    fecharMenu();
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  document.addEventListener("click", (e) => {
    const alvo = e.target.closest("[data-bloqueado]");
    if (!alvo) return;
    e.preventDefault();
    abrirConvite(alvo.dataset.bloqueado);
  });

  // ---------- Sidebar ----------
  const corpo = document.body;
  const botaoMenu = document.getElementById("abrir-menu");
  const veu = document.getElementById("veu");
  function fecharMenu() { corpo.classList.remove("menu-aberto"); veu.hidden = true; botaoMenu.setAttribute("aria-expanded", "false"); }
  botaoMenu.addEventListener("click", () => {
    const abrir = !corpo.classList.contains("menu-aberto");
    corpo.classList.toggle("menu-aberto", abrir); veu.hidden = !abrir; botaoMenu.setAttribute("aria-expanded", String(abrir));
  });
  veu.addEventListener("click", fecharMenu);
  document.getElementById("recolher").addEventListener("click", () => corpo.classList.toggle("sb-recolhida"));
  document.getElementById("badge-solucoes").textContent = D.liberadas.length;

  // ---------- Página: Soluções ----------
  function cardLiberado(app) {
    const s = situacao(app);
    const selo = s.tipo ? `<span class="selo ${s.tipo}">${s.texto}</span>` : '<span class="selo">Liberada</span>';
    const demo = app.demo ? '<span class="selo demo" title="Demonstração: a integração completa fica disponível no AI Action">Demo</span>' : "";
    return `
      <a class="card" href="#/solucoes/${app.id}">
        <div class="card-topo"><span class="rotulo cinza">${esc(app.categoria)}</span><span class="selos">${demo}${selo}</span></div>
        <h3>${esc(app.nome)}</h3>
        <p class="desc">${esc(app.resumo)}</p>
        <div class="tempo"><b>${app.minutos} minutos</b><small>para implantar</small></div>
        <div class="ferramentas">${ferrRender}${ferrOpenRouter}${app.elevenlabs ? ferrElevenLabs : ""}</div>
      </a>`;
  }
  function cardBloqueado(app) {
    return `
      <button type="button" class="card bloqueado" data-bloqueado="${esc(app.nome)}">
        <div class="card-topo"><span class="rotulo cinza">${esc(app.categoria)}</span><span class="selo bloq"><i class="cadeado"></i>AI Action</span></div>
        <h3>${esc(app.nome)}</h3>
        <p class="desc">${esc(app.resumo)}</p>
        <div class="tempo"><b>${app.minutos} minutos</b><small>para implantar</small></div>
        <div class="ferramentas">${ferrRender}${ferrOpenRouter}</div>
      </button>`;
  }
  const cardConvite = (restantes) => `
    <div class="card convite">
      <p class="rotulo claro">AI Action</p>
      <h3>Mais ${restantes} soluções esperando o seu time</h3>
      <p class="desc">Ingresse no AI Action para liberar o catálogo completo, as mentorias e o Agent Builder.</p>
      <button type="button" class="btn claro" data-bloqueado="Catálogo completo">Liberar acesso</button>
    </div>`;

  function itensFiltrados() {
    const termo = normalizar(filtro.busca.trim());
    const passa = (a) => (filtro.categoria === "Todas" || a.categoria === filtro.categoria)
      && (!termo || normalizar(`${a.nome} ${a.resumo} ${a.categoria}`).includes(termo));
    let lib = D.liberadas.filter(passa).map((a) => ({ a, lib: true }));
    let bloq = D.bloqueadas.filter(passa).map((a) => ({ a, lib: false }));
    if (filtro.ordem === "nome") return [...lib, ...bloq].sort((x, y) => x.a.nome.localeCompare(y.a.nome, "pt-BR"));
    if (filtro.ordem === "tempo") return [...lib, ...bloq].sort((x, y) => x.a.minutos - y.a.minutos || x.a.nome.localeCompare(y.a.nome, "pt-BR"));
    return [...lib, ...bloq];
  }
  function desenharGrade() {
    const grade = document.getElementById("grade");
    const itens = itensFiltrados();
    const restantes = D.totalCatalogo - D.liberadas.length;
    grade.innerHTML = itens.length
      ? itens.map(({ a, lib }) => (lib ? cardLiberado(a) : cardBloqueado(a))).join("") + (filtro.busca ? "" : cardConvite(restantes))
      : `<p class="vazio">Nenhuma solução liberada com esse termo. No AI Action são ${D.totalCatalogo} soluções. <a class="link" href="#" data-bloqueado="Catálogo completo">Ver como liberar</a></p>`;
  }

  function paginaSolucoes() {
    document.title = "Soluções · AI Hub · StartSe";
    const total = (cat) => D.liberadas.filter((a) => a.categoria === cat).length + D.bloqueadas.filter((a) => a.categoria === cat).length;
    const status = D.liberadas.map((a) => ({ a, s: situacao(a) }));
    const implantadas = status.filter((x) => x.s.tipo === "ok").length;
    const pilulas = status.map(({ a, s }) => `<span class="pilula ${s.tipo}">${esc(a.nome)}${s.tipo ? ` · ${s.tipo === "ok" ? "implantada" : `${s.feitos}/${a.roteiro.length}`}` : ""}</span>`).join("");
    const inicio = D.liberadas.find((a) => a.id === D.inicio) || D.liberadas[0];
    const proxima = implantadas === 0 ? inicio
      : [inicio, ...D.liberadas].find((a) => situacao(a).tipo !== "ok") || inicio;

    conteudo.innerHTML = `
      <h1 class="titulo-pagina">O que você veio implantar</h1>
      <p class="lead">No AI Action, cinco soluções estão liberadas para você publicar na sua própria conta do Render, no plano gratuito. As demais ficam disponíveis com o acesso completo.</p>

      <section class="faixa" aria-labelledby="faixa-titulo">
        <div>
          <p class="rotulo">AI Action · ${D.liberadas.length} soluções liberadas</p>
          <h2 id="faixa-titulo">${implantadas === D.liberadas.length ? "Você implantou as cinco soluções da jornada" : implantadas ? `Você já implantou ${implantadas} de ${D.liberadas.length}` : "Comece pela primeira solução da sua jornada"}</h2>
          <p class="txt">Cada solução já vem pronta: um clique em <strong>Publicar no Render</strong> cria o app na sua conta, e o próprio app conduz a configuração. Sem chave, tudo roda em modo demonstração.</p>
          <div class="progresso-geral">${pilulas}</div>
        </div>
        <a class="btn primario" href="#/solucoes/${proxima.id}">${implantadas === D.liberadas.length ? "Rever as soluções" : implantadas ? "Continuar a jornada" : "Começar agora"}</a>
      </section>

      <hr class="divisor">
      <div class="catalogo-topo">
        <h2>Catálogo completo <span>${D.totalCatalogo} soluções</span></h2>
        <label class="ordenar">Ordenar por
          <select class="select" id="ordem">
            <option value="liberadas">Liberadas primeiro</option>
            <option value="nome">Nome (A–Z)</option>
            <option value="tempo">Tempo para implantar</option>
          </select>
        </label>
      </div>
      <div class="filtros">
        <div class="abas" role="tablist" aria-label="Categorias">
          ${["Todas", ...CATEGORIAS].map((c) => `<button type="button" class="aba" role="tab" data-cat="${c}" aria-selected="${c === filtro.categoria}">${c}${c === "Todas" ? "" : ` <small>${total(c)}</small>`}</button>`).join("")}
        </div>
        <label class="busca">${icone.busca}<input type="search" id="buscar" placeholder="Buscar solução" aria-label="Buscar solução" value="${esc(filtro.busca)}"></label>
        <button type="button" class="mais-filtros" data-bloqueado="Mais filtros">${icone.filtros} Mais filtros</button>
      </div>
      <div class="grade" id="grade"></div>`;

    const ordem = document.getElementById("ordem");
    ordem.value = filtro.ordem;
    ordem.addEventListener("change", () => { filtro.ordem = ordem.value; desenharGrade(); });
    conteudo.querySelectorAll(".aba").forEach((b) => b.addEventListener("click", () => {
      filtro.categoria = b.dataset.cat;
      conteudo.querySelectorAll(".aba").forEach((x) => x.setAttribute("aria-selected", String(x === b)));
      desenharGrade();
    }));
    document.getElementById("buscar").addEventListener("input", (e) => { filtro.busca = e.target.value; desenharGrade(); });
    desenharGrade();
  }

  // ---------- Página: detalhe da solução ----------
  function paginaDetalhe(app) {
    document.title = `${app.nome} · AI Hub · StartSe`;
    const total = app.roteiro.reduce((s, p) => s + p[3], 0);
    conteudo.innerHTML = `
      <nav class="migalha" aria-label="Você está em">
        <a href="#/">${icone.voltar} Soluções</a><span>/</span><span>${esc(app.nome)}</span>
      </nav>

      <section class="hero">
        <div class="hero-texto">
          <p class="rotulo claro">${esc(app.categoria)} · ${app.minutos} minutos para estar rodando</p>
          <h1>${esc(app.nome)}${app.demo ? ' <span class="selo demo">Demo</span>' : ""}</h1>
          <p class="hero-problema">${esc(app.problema)}</p>
          ${app.demo ? '<p class="hero-demo">Esta solução é uma demonstração. A integração completa com a sua operação fica disponível para quem está no AI Action. <a class="link" href="#" data-bloqueado="Integração completa">Saiba como liberar</a></p>' : ""}
          <div class="hero-tempo"><b>${app.minutos} minutos</b><small>para estar rodando</small></div>
        </div>
        <aside class="painel" aria-label="Começar agora">
          <p class="rotulo cinza">Começar agora</p>
          <p class="txt">A aplicação já vem pronta: o Render publica a imagem na sua conta, no plano gratuito, e a própria aplicação conduz a configuração. Não há instalador aqui.</p>
          <a class="btn primario bloco" id="publicar" href="${urlPublicar(app)}" target="_blank" rel="noopener">Publicar no Render</a>
          <hr>
          <p class="rotulo cinza">Ferramentas desta solução</p>
          <a class="ferr-caixa" href="${urlPublicar(app)}" target="_blank" rel="noopener">
            <img src="img/render.svg" alt="">
            <span><span class="rotulo">Hospedagem · Obrigatório</span><b>Render</b><small>Publicar no Render</small></span>${icone.externo}
          </a>
          <a class="ferr-caixa" href="https://openrouter.ai" target="_blank" rel="noopener">
            <img src="img/openrouter.svg" alt="">
            <span><span class="rotulo cinza">IA · Opcional</span><b>OpenRouter</b><small>Conectar dentro do app</small></span>${icone.externo}
          </a>
          ${app.elevenlabs ? `<a class="ferr-caixa" href="https://elevenlabs.io/app/settings/api-keys" target="_blank" rel="noopener">
            <img src="img/elevenlabs.svg" alt="">
            <span><span class="rotulo cinza">Voz · Opcional</span><b>ElevenLabs</b><small>Colar a chave dentro do app</small></span>${icone.externo}
          </a>` : ""}
          <p class="nota">Prefere fazer à mão? No Render, use New › Blueprint com <a class="link" href="${urlBlueprint(app)}" target="_blank" rel="noopener">este repositório</a> e siga o roteiro de cima para baixo.</p>
        </aside>
      </section>

      <div class="corpo">
        <div>
          <section class="bloco-secao">
            <h2 class="secao-titulo">A dor que resolve</h2>
            <p class="secao-sub">O impacto direto no negócio e a mudança de realidade para o time.</p>
            <div class="tres">
              <div><p class="rotulo">O problema</p><p>${esc(app.problema)}</p></div>
              <div><p class="rotulo">Quem sofre hoje</p><p>${esc(app.quemSofre)}</p></div>
              <div><p class="rotulo">Resultado</p><p>${esc(app.resultado)}</p></div>
            </div>
          </section>

          <section class="bloco-secao">
            <h2 class="secao-titulo">Como o processo funciona</h2>
            <p class="secao-sub">A lógica da solução e o desenho de ponta a ponta.</p>
            <p class="fluxo">${esc(app.processo)}</p>
          </section>

          <section class="bloco-secao">
            <h2 class="secao-titulo">Critérios de aceite</h2>
            <p class="secao-sub">Como validar que a solução está pronta e operando com segurança.</p>
            ${app.criterios.map(([t, v], i) => `<div class="criterio"><b>${i + 1}. ${esc(t)}</b><p><strong>Como verificar:</strong> ${esc(v)}</p></div>`).join("")}
          </section>

          <section class="bloco-secao">
            <h2 class="secao-titulo">Roteiro de implantação</h2>
            <p class="secao-sub">Cerca de ${total} minutos. Marque cada passo quando concluir.</p>
            <ol class="roteiro" id="roteiro">
              ${app.roteiro.map(([t, d, f, m], i) => `
                <li class="passo" data-i="${i}">
                  <span class="num">${String(i + 1).padStart(2, "0")}</span>
                  <div><h3>${esc(t)}</h3><p>${esc(d)}</p>
                    <label><input type="checkbox" data-passo="${i}"> Concluí este passo</label></div>
                  <span class="meta">${esc(f)} · ${m} min</span>
                </li>`).join("")}
            </ol>
          </section>

          <section class="antes">
            <h3>Antes de começar</h3>
            <ul>${app.antes.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
          </section>
        </div>

        <aside class="lateral">
          <section class="meu-app" aria-labelledby="meu-app-titulo">
            <p class="rotulo">Seu app</p>
            <h3 id="meu-app-titulo">Já publicou? Guarde o endereço</h3>
            <p class="txt">Quando o Render terminar, copie a URL do serviço <strong>${esc(app.servico)}</strong> (termina em .onrender.com) e cole aqui.</p>
            <form id="form-url">
              <input type="url" id="url-app" placeholder="https://${esc(app.servico)}.onrender.com" aria-label="Endereço do seu app" required>
              <button class="btn primario pequeno" type="submit">Salvar</button>
            </form>
            <div id="acoes-app"></div>
            <div class="barra" id="barra"><i></i></div>
            <p class="txt" id="barra-txt"></p>
          </section>
          <section class="travou">
            <p class="rotulo claro">Travou?</p>
            <p>A publicação no plano gratuito leva uns 2 minutos e o app adormece sem uso: a primeira visita depois de um tempo pode demorar até um minuto. Se o erro continuar, leve para o plantão do AI Action.</p>
            <button type="button" class="btn claro" data-bloqueado="Mentorias">Ver a agenda de mentorias</button>
          </section>
        </aside>
      </div>`;

    ligarDetalhe(app);
  }

  function ligarDetalhe(app) {
    const p = lerProgresso(app);
    const roteiro = document.getElementById("roteiro");
    const inputUrl = document.getElementById("url-app");
    const acoes = document.getElementById("acoes-app");

    function atualizar() {
      roteiro.querySelectorAll(".passo").forEach((li) => {
        const i = Number(li.dataset.i);
        li.classList.toggle("feito", p.passos[i]);
        li.querySelector("input").checked = p.passos[i];
      });
      const feitos = p.passos.filter(Boolean).length;
      const barra = document.getElementById("barra");
      barra.querySelector("i").style.width = `${(feitos / p.passos.length) * 100}%`;
      barra.classList.toggle("cheia", feitos === p.passos.length);
      document.getElementById("barra-txt").textContent = feitos === p.passos.length
        ? "Roteiro completo. Solução implantada."
        : `${feitos} de ${p.passos.length} passos concluídos.`;
      inputUrl.value = p.url;
      acoes.innerHTML = p.url ? `
        <div class="acoes">
          <a class="btn primario pequeno" href="${esc(p.url)}" target="_blank" rel="noopener">Abrir meu app</a>
          <a class="btn secundario pequeno" href="${esc(p.url + app.setup)}" target="_blank" rel="noopener">Abrir Configurações</a>
          <button type="button" class="btn secundario pequeno" id="testar">Testar se está no ar</button>
        </div>
        <p class="estado" id="estado" hidden></p>` : "";
      document.getElementById("testar")?.addEventListener("click", testar);
    }

    // O health check é de outro domínio e não libera CORS: no-cors só diz se o endereço respondeu.
    async function testar() {
      const estado = document.getElementById("estado");
      estado.hidden = false; estado.className = "estado";
      estado.textContent = "Chamando o app… no plano gratuito ele pode levar até um minuto para acordar.";
      const ctrl = new AbortController();
      const limite = setTimeout(() => ctrl.abort(), 75000);
      try {
        await fetch(`${p.url}/api/health`, { mode: "no-cors", cache: "no-store", signal: ctrl.signal });
        estado.className = "estado ok";
        estado.textContent = "O endereço respondeu. Abra o app e crie a sua conta.";
      } catch {
        estado.className = "estado erro";
        estado.textContent = "Ainda não respondeu. Confira no painel do Render se o deploy terminou (status Live) e tente de novo.";
      } finally { clearTimeout(limite); }
    }

    roteiro.addEventListener("change", (e) => {
      const i = e.target.dataset.passo;
      if (i === undefined) return;
      p.passos[Number(i)] = e.target.checked;
      salvarProgresso(app, p); atualizar();
    });
    document.getElementById("form-url").addEventListener("submit", (e) => {
      e.preventDefault();
      let url = inputUrl.value.trim().replace(/\/+$/, "");
      try { url = new URL(url).origin; } catch { return; }
      p.url = url; p.passos[0] = true;
      salvarProgresso(app, p); atualizar();
    });
    document.getElementById("publicar").addEventListener("click", () => {
      if (!p.url) { inputUrl.focus({ preventScroll: true }); }
    });
    atualizar();
  }

  // ---------- Rotas ----------
  function rotear() {
    const m = location.hash.match(/^#\/solucoes\/([\w-]+)/);
    const app = m && D.liberadas.find((a) => a.id === m[1]);
    fecharMenu();
    if (app) paginaDetalhe(app); else paginaSolucoes();
    window.scrollTo(0, 0);
    conteudo.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", rotear);
  rotear();
})();
