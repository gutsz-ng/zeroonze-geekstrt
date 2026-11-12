/* ===========================================================
   ZeroOnze — scripts compartilhados por todas as páginas
   =========================================================== */

/* ---------- Catálogo ---------- */
const PRODUTOS = [
  {
    id: "zoro", nome: "Oversized Zoro", preco: 89.80, img: "assets/img/zoro.jpg",
    imgs: { preto: "assets/img/zoro.jpg", branco: "assets/img/zoro-branca.jpg" },
    frente: { preto: "assets/img/zoro-frente.jpg", branco: "assets/img/zoro-branca-frente.jpg" },
    categoria: "one-piece", cor: "preto", novo: true,
    tags: "one piece era dos piratas wanted roronoa",
    descricao: "Dead or Alive: ฿ 1.111.000.000. O ex-caçador de piratas que se tornou o pesadelo da Marinha com uma das cabeças mais valiosas do Novo Mundo.",
  },
  {
    id: "luffy", nome: "Oversized Luffy", preco: 89.80, img: "assets/img/luffy.jpg",
    imgs: { branco: "assets/img/luffy.jpg", preto: "assets/img/luffy-preta.jpg" },
    frente: { branco: "assets/img/luffy-frente.jpg", preto: "assets/img/luffy-preta-frente.jpg" },
    categoria: "one-piece", cor: "branco", novo: true,
    tags: "one piece era dos piratas wanted monkey d gear 5",
    descricao: "Dead or Alive: ฿ 3.000.000.000. O sorriso que a Marinha tentou apagar e a recompensa que consagrou o novo Imperador dos Mares.",
  },
  {
    id: "loki", nome: "Oversized Loki", preco: 89.80, img: "assets/img/loki.jpg",
    imgs: { preto: "assets/img/loki.jpg", branco: "assets/img/loki-branca.jpg" },
    frente: { preto: "assets/img/loki-frente.jpg", branco: "assets/img/loki-branca-frente.jpg" },
    categoria: "one-piece", cor: "preto", novo: true,
    tags: "one piece era dos piratas elbaf gigantes",
    descricao: "“Eu sou o Deus do Sol que trará o fim deste mundo.” A lenda colossal do reino dos gigantes forjada em uma estética nórdica sombria e urbana.",
  },
  {
    id: "cell", nome: "Oversized Cell Perfect Form", preco: 109.90, img: "assets/img/cell.jpg",
    imgs: { preto: "assets/img/cell.jpg", branco: "assets/img/cell-branca.jpg" },
    frente: { preto: "assets/img/cell-frente.jpg", branco: "assets/img/cell-branca-frente.jpg" },
    categoria: "dragon-ball", cor: "preto", destaque: true,
    tags: "dragon ball z dbz androide",
    descricao: "A forma definitiva do vilão mais icônico da saga androide traduzida em pura estética streetwear.",
  },
  {
    id: "kakaroto", nome: "Oversized Kakaroto", preco: 109.90, img: "assets/img/kakaroto.jpg",
    imgs: { preto: "assets/img/kakaroto.jpg", branco: "assets/img/kakaroto-branca.jpg" },
    frente: { preto: "assets/img/kakaroto-frente.jpg", branco: "assets/img/kakaroto-branca-frente.jpg" },
    categoria: "dragon-ball", cor: "preto", destaque: true,
    tags: "dragon ball z dbz goku super saiyajin",
    descricao: "O poder lendário de Kakaroto traduzido no peso e na atitude do streetwear.",
  },
  {
    id: "freeza", nome: "Oversized Freeza", preco: 109.90, img: "assets/img/freeza.jpg",
    imgs: { branco: "assets/img/freeza.jpg", preto: "assets/img/freeza-preta.jpg" },
    frente: { branco: "assets/img/freeza-frente.jpg", preto: "assets/img/freeza-preta-frente.jpg" },
    categoria: "dragon-ball", cor: "branco", destaque: true,
    tags: "dragon ball z dbz frieza",
    descricao: "Crueldade calculada e soberania galáctica em um corte refinado.",
  },
  {
    id: "boo", nome: "Oversized Boo", preco: 109.90, img: "assets/img/boo.jpg",
    imgs: { preto: "assets/img/boo.jpg", branco: "assets/img/boo-branca.jpg" },
    frente: { preto: "assets/img/boo-frente.jpg", branco: "assets/img/boo-branca-frente.jpg" },
    categoria: "dragon-ball", cor: "preto",
    tags: "dragon ball z dbz majin buu",
    descricao: "Sem razão, sem remorso, sem plano. Apenas o caos primordial em sua forma mais destrutiva.",
  },
  {
    id: "vegeta", nome: "Oversized Vegeta", preco: 109.90, img: "assets/img/vegeta.jpg",
    imgs: { preto: "assets/img/vegeta.jpg", branco: "assets/img/vegeta-branca.jpg" },
    frente: { preto: "assets/img/vegeta-frente.jpg", branco: "assets/img/vegeta-branca-frente.jpg" },
    categoria: "dragon-ball", cor: "preto",
    tags: "dragon ball z dbz principe saiyajin",
    descricao: "A imponência e a determinação do Príncipe dos Saiyajins em uma peça desenhada para o streetwear.",
  },
  {
    id: "gohan", nome: "Oversized Gohan", preco: 109.90, img: "assets/img/gohan.jpg",
    imgs: { preto: "assets/img/gohan.jpg", branco: "assets/img/gohan-branca.jpg" },
    frente: { preto: "assets/img/gohan-frente.jpg", branco: "assets/img/gohan-branca-frente.jpg" },
    categoria: "dragon-ball", cor: "preto",
    tags: "dragon ball z dbz",
    descricao: "Cuidado com a fúria silenciosa de quem odeia lutar. Uma peça com corte oversized e caimento estruturado de alta gramatura, projetada para se destacar com presença natural.",
  },
  {
    id: "itachi", nome: "Oversized Itachi", preco: 109.90, img: "assets/img/itachi.jpg",
    // Fotos por cor: ao trocar a cor na página do produto, a foto muda junto
    imgs: { preto: "assets/img/itachi.jpg", branco: "assets/img/itachi-branca.jpg" },
    frente: { preto: "assets/img/itachi-frente.jpg", branco: "assets/img/itachi-branca-frente.jpg" },
    categoria: "naruto", cor: "preto",
    tags: "naruto shippuden uchiha akatsuki sharingan corvos",
    descricao: "Viver na escuridão para proteger a luz. O peso do mundo, da desonra e do sacrifício carregados em silêncio sob o bater de asas dos corvos.",
  },
  {
    id: "sharingan-clan", nome: "Oversized Sharingan Clan", preco: 109.90, img: "assets/img/sharingan-clan.jpg",
    // Foto da frente, por cor. Quando existe, a página mostra a opção "Costas / Frente"
    imgs: { preto: "assets/img/sharingan-clan.jpg", branco: "assets/img/sharingan-clan-branca.jpg" },
    frente: { preto: "assets/img/sharingan-clan-frente.jpg", branco: "assets/img/sharingan-clan-branca-frente.jpg" },
    categoria: "naruto", cor: "preto",
    tags: "naruto shippuden uchiha sharigan clan cla shisui itachi sasuke madara obito konoha",
    descricao: "Shisui, Itachi, Sasuke, Madara e Obito. Cinco caminhos moldados pela dor, pelo sacrifício e pelo poder dos olhos que reescrevem o destino.",
  },
  {
    id: "maki-zenin", nome: "Oversized Maki Zenin", preco: 89.90, img: "assets/img/maki-zenin.jpg",
    imgs: { preto: "assets/img/maki-zenin.jpg", branco: "assets/img/maki-zenin-branca.jpg" },
    frente: { preto: "assets/img/maki-zenin-frente.jpg", branco: "assets/img/maki-zenin-branca-frente.jpg" },
    categoria: "jujutsu-kaisen", cor: "preto",
    tags: "jujutsu kaisen jjk zen'in zenin maki cla",
    descricao: "Cicatrizes que contam a história de quem sobreviveu ao inferno para destruí-lo. Sem energia amaldiçoada, mas com a fúria física absoluta que colocou um clã inteiro de joelhos.",
  },
  {
    id: "rei-das-maldicoes", nome: "Oversized Rei das Maldições", preco: 89.90, img: "assets/img/rei-das-maldicoes.jpg",
    imgs: { branco: "assets/img/rei-das-maldicoes.jpg", preto: "assets/img/rei-das-maldicoes-preta.jpg" },
    frente: { branco: "assets/img/rei-das-maldicoes-frente.jpg", preto: "assets/img/rei-das-maldicoes-preta-frente.jpg" },
    categoria: "jujutsu-kaisen", cor: "branco",
    tags: "jujutsu kaisen jjk sukuna ryomen itadori yuji rei das maldicoes",
    descricao: "Um corpo dividido, duas vontades colidindo. Quando as marcas escuras sobem pela pele, o herói dá lugar ao terror absoluto do Rei das Maldições.",
  },
  {
    id: "sukuna-vs-gojo", nome: "Oversized Sukuna vs Gojo", preco: 89.90, img: "assets/img/sukuna-vs-gojo.jpg",
    imgs: { preto: "assets/img/sukuna-vs-gojo.jpg", branco: "assets/img/sukuna-vs-gojo-branca.jpg" },
    frente: { preto: "assets/img/sukuna-vs-gojo-frente.jpg", branco: "assets/img/sukuna-vs-gojo-branca-frente.jpg" },
    categoria: "jujutsu-kaisen", cor: "preto",
    tags: "jujutsu kaisen jjk sukuna gojo satoru ryomen infinito santuario malevolente versus vs",
    descricao: "“Você é o mais forte porque é Satoru Gojo, ou é Satoru Gojo porque é o mais forte?” O choque definitivo entre o Infinito e o Santuário Malevolente em uma estampa de presença absoluta.",
  },
  {
    id: "levi", nome: "Oversized Levi Ackerman", preco: 89.90, img: "assets/img/levi.jpg",
    imgs: { branco: "assets/img/levi.jpg", preto: "assets/img/levi-preta.jpg" },
    frente: { branco: "assets/img/levi-frente.jpg", preto: "assets/img/levi-preta-frente.jpg" },
    categoria: "attack-on-titan", cor: "branco",
    tags: "attack on titan shingeki no kyojin aot levi ackerman capitao tropa de exploracao",
    descricao: "O Soldado Mais Forte da Humanidade em uma estampa de alto impacto visual que traduz a agilidade e a determinação cega do Capitão.",
  },
  {
    id: "asas-da-liberdade", nome: "Oversized Asas da Liberdade", preco: 89.90, img: "assets/img/asas.jpg",
    imgs: { preto: "assets/img/asas.jpg", branco: "assets/img/asas-branca.jpg" },
    frente: { preto: "assets/img/asas-frente.jpg", branco: "assets/img/asas-branca-frente.jpg" },
    categoria: "attack-on-titan", cor: "preto",
    tags: "attack on titan shingeki no kyojin aot asas da liberdade tropa de exploracao tatakae wings of freedom",
    descricao: "Se você não lutar, você não pode vencer. Dediquem seus corações! O peso de carregar nos ombros as asas daqueles que derramaram seu sangue em busca da verdadeira liberdade. TATAKAE!",
  },
];

const CATEGORIAS = { "dragon-ball": "Dragon Ball", "one-piece": "One Piece", "naruto": "Naruto", "jujutsu-kaisen": "Jujutsu Kaisen", "attack-on-titan": "Attack on Titan" };
const TAMANHOS = ["P", "M", "G", "GG"];
const CORES = { branco: "Branco", preto: "Preto" };

/* ---------- Utilidades ---------- */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const normalizar = (t) => t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
const produto = (id) => PRODUTOS.find((p) => p.id === id);
const fotoDe = (p, cor) => (p.imgs && p.imgs[cor]) || p.img;
const frenteDe = (p, cor) => (p.frente && p.frente[cor]) || null;

const storage = {
  get(chave, padrao) {
    try { return JSON.parse(localStorage.getItem(chave)) ?? padrao; }
    catch { return padrao; }
  },
  set(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); } catch { /* sem storage */ }
  },
};

/*
  O site funciona de dois jeitos:
  - Multipáginas (VS Code): index.html, produtos.html, produto.html?id=..., pedidos.html
  - Página única (prévia): tudo num index.html, trocando de "aba" pelo #hash
  A prévia é detectada pela presença de elementos [data-view].
*/
const SPA = !!document.querySelector("[data-view]");
const linkProduto = (id) => (SPA ? `#produto-${id}` : `produto.html?id=${id}`);

/* ---------- Ícones ---------- */
const ICONES = {
  busca: `<svg viewBox="0 0 24 24"><path d="M10 2a8 8 0 0 1 6.32 12.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.39-5.38A8 8 0 1 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/></svg>`,
  conta: `<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-9 2.24-9 5.5V22h18v-2.5c0-3.26-4.58-5.5-9-5.5Z"/></svg>`,
  carrinho: `<svg viewBox="0 0 24 24"><path d="M1 2.5A1 1 0 0 1 2 1.5h2.2a1 1 0 0 1 .97.76L5.6 4H22a1 1 0 0 1 .97 1.24l-2 8A1 1 0 0 1 20 14H8.1l.5 2H20a1 1 0 1 1 0 2H7.8a1 1 0 0 1-.97-.76L3.42 3.5H2a1 1 0 0 1-1-1ZM9 21.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm11 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"/></svg>`,
  lupa: `<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5.5 5.5"/></svg>`,
};

/* ---------- Card de produto ---------- */
function cardProduto(p) {
  const frente = frenteDe(p, p.cor);
  const midia = p.img
    ? `<img src="${p.img}" alt="Camiseta ${p.nome}" loading="lazy">` +
      (frente ? `<img class="card__alt" src="${frente}" alt="" loading="lazy">` : "")
    : `<div class="card__placeholder">Imagem em breve</div>`;
  const link = linkProduto(p.id);

  return `
    <article class="card">
      <div class="card__media">
        <a class="card__link" href="${link}" aria-label="${p.nome}">${midia}</a>
        <a class="card__add" href="${link}">Ver detalhes</a>
      </div>
      <h3 class="card__name display"><a href="${link}">${p.nome}</a></h3>
      <p class="card__price">${brl(p.preco)}<a class="card__cart" href="${link}" aria-label="Comprar ${p.nome}">${ICONES.carrinho}</a></p>
    </article>`;
}

/* ===========================================================
   Carrinho  (cada item = produto + tamanho + cor)
   =========================================================== */
const chaveItem = (i) => `${i.id}|${i.tamanho}|${i.cor}`;

const Carrinho = {
  itens: storage.get("zo_carrinho", []).filter((i) => produto(i.id) && i.tamanho),

  salvar() {
    storage.set("zo_carrinho", this.itens);
    this.render();
  },
  adicionar(id, tamanho, cor) {
    const novo = { id, tamanho, cor, qtd: 1 };
    const existente = this.itens.find((i) => chaveItem(i) === chaveItem(novo));
    existente ? existente.qtd++ : this.itens.push(novo);
    this.salvar();
    toast(`${produto(id).nome} (${tamanho}) adicionada ao carrinho`);
  },
  alterar(chave, delta) {
    const item = this.itens.find((i) => chaveItem(i) === chave);
    if (!item) return;
    item.qtd += delta;
    if (item.qtd <= 0) this.itens = this.itens.filter((i) => i !== item);
    this.salvar();
  },
  remover(chave) {
    this.itens = this.itens.filter((i) => chaveItem(i) !== chave);
    this.salvar();
  },
  total()      { return this.itens.reduce((s, i) => s + produto(i.id).preco * i.qtd, 0); },
  quantidade() { return this.itens.reduce((s, i) => s + i.qtd, 0); },

  irParaCheckout() {
    if (!this.itens.length) return;
    abrirCarrinho(false);
    if (SPA) irPara("checkout");
    else location.href = "checkout.html";
  },

  criarPedido(extra) {
    const pedidos = storage.get("zo_pedidos", []);
    pedidos.unshift({
      numero: Math.floor(100000 + Math.random() * 900000),
      data: new Date().toISOString(),
      itens: this.itens.map((i) => {
        const p = produto(i.id);
        return { id: p.id, produto: p.nome, tamanho: i.tamanho, cor: i.cor,
                 nome: `${p.nome} — ${i.tamanho} / ${CORES[i.cor]}`, qtd: i.qtd, preco: p.preco };
      }),
      ...extra,
    });
    storage.set("zo_pedidos", pedidos);
    this.itens = [];
    this.salvar();
  },

  renderMobile() {
    const alvo = $("#mcart-itens");
    if (!alvo) return;
    alvo.innerHTML = !this.itens.length
      ? `<p class="mcart__empty">Seu carrinho está vazio.</p>`
      : this.itens.map((i) => {
          const p = produto(i.id);
          const foto = fotoDe(p, i.cor);
          return `
            <div class="mcart__item">
              ${foto ? `<img src="${foto}" alt="">` : `<div class="thumb"></div>`}
              <div>
                <h3 class="display">${p.nome}</h3>
                <p class="mcart__price display">${brl(p.preco * i.qtd)}</p>
                <p class="mcart__meta">Tam. ${i.tamanho} · ${CORES[i.cor]}${i.qtd > 1 ? ` · ${i.qtd} unidades` : ""}</p>
              </div>
            </div>`;
        }).join("");
    $("#mcart-total").textContent = brl(this.total());
    $("#mcart-esvaziar").hidden = !this.itens.length;
    $("#mcart-ver").disabled = !this.itens.length;
  },

  esvaziar() {
    if (!this.itens.length) return;
    this.itens = [];
    this.salvar();
    toast("Carrinho esvaziado");
  },

  render() {
    $$(".cart-count").forEach((el) => {
      const q = this.quantidade();
      el.dataset.count = q;
      el.textContent = q || "";
    });

    const corpo = $("#drawer-body");
    if (!corpo) return;

    corpo.innerHTML = !this.itens.length
      ? `<p style="padding:40px 0;text-align:center;color:#999">Seu carrinho está vazio.</p>`
      : this.itens.map((i) => {
          const p = produto(i.id);
          const k = chaveItem(i);
          const foto = fotoDe(p, i.cor);
          const thumb = foto ? `<img src="${foto}" alt="">` : `<div class="thumb"></div>`;
          return `
            <div class="cart-item">
              ${thumb}
              <div>
                <h4>${p.nome}</h4>
                <small>${i.tamanho} · ${CORES[i.cor]} · ${brl(p.preco)}</small>
                <div class="qty">
                  <button data-qty="${k}" data-delta="-1" aria-label="Diminuir">−</button>
                  <span>${i.qtd}</span>
                  <button data-qty="${k}" data-delta="1" aria-label="Aumentar">+</button>
                </div>
              </div>
              <button class="cart-item__remove" data-remove="${k}">Remover</button>
            </div>`;
        }).join("");

    const total = this.total();
    $("#drawer-total").textContent = brl(total);
    $("#drawer-note").textContent = total >= 200
      ? "Você ganhou frete grátis! Parcele em até 12x."
      : `Faltam ${brl(200 - total)} para frete grátis. Parcele em até 12x.`;
    $("#checkout").disabled = !this.itens.length;
    this.renderMobile();
    Checkout.renderResumo();
  },
};

/* ---------- Favoritos (botão "Salvar") ---------- */
const Favoritos = {
  ids: storage.get("zo_favoritos", []),
  tem(id) { return this.ids.includes(id); },
  alternar(id) {
    this.ids = this.tem(id) ? this.ids.filter((x) => x !== id) : [...this.ids, id];
    storage.set("zo_favoritos", this.ids);
    toast(this.tem(id) ? "Produto salvo! Veja em Meu Perfil › Produtos Salvos" : "Produto removido dos salvos");
  },
};

/* ---------- Elementos globais (gaveta, toast, footer) ---------- */
function montarElementosGlobais() {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="overlay" id="overlay"></div>
    <aside class="drawer" id="drawer" aria-label="Carrinho">
      <div class="drawer__head">
        <h2 class="display">Carrinho</h2>
        <button class="drawer__close" id="drawer-close" aria-label="Fechar">&times;</button>
      </div>
      <div class="drawer__body" id="drawer-body"></div>
      <div class="drawer__foot">
        <div class="drawer__total"><span>Total</span><strong id="drawer-total">R$ 0,00</strong></div>
        <p class="drawer__note" id="drawer-note"></p>
        <button class="btn btn--block" id="checkout">Finalizar compra</button>
      </div>
    </aside>
    <div class="toast" id="toast"></div>

    <!-- Carrinho do celular: cartão que desce do ícone -->
    <div class="mcart" id="mcart" role="dialog" aria-label="Meu carrinho" aria-hidden="true">
      <h2 class="mcart__title display">Meu Carrinho</h2>
      <div class="mcart__items" id="mcart-itens"></div>
      <div class="mcart__total display"><span>Valor total:</span><strong id="mcart-total">R$ 0,00</strong></div>
      <div class="mcart__actions">
        <button class="mcart__clear display" id="mcart-esvaziar">Esvaziar</button>
        <button class="mcart__go display" id="mcart-ver">Ver Carrinho</button>
      </div>
    </div>
  `);

  const footer = $("#footer");
  if (!footer) return;
  const L = SPA
    ? { inicio: "#inicio", produtos: '#produtos" data-cat="', pedidos: "#pedidos", priv: "#privacidade" }
    : { inicio: "index.html", produtos: "produtos.html", pedidos: "pedidos.html", priv: "privacidade.html" };
  footer.innerHTML = `
    <div class="container footer__inner">
      <nav class="nav" aria-label="Rodapé">
        <a href="${L.inicio}">Início</a>
        <a href="${L.produtos}">Produtos</a>
        <a href="${L.produtos}">Categorias</a>
        <a href="${L.pedidos}">Meus pedidos</a>
      </nav>
      <a class="logo" href="${L.inicio}"><img src="assets/img/logo.png" alt="ZeroOnze"></a>
      <div class="footer__right">
        <a href="${SPA ? "#newsletter" : "newsletter.html"}">Newsletter</a>
        <a href="${L.priv}">Privacidade &amp; Dados</a>
      </div>
    </div>`;
}

const ehCelular = () => window.matchMedia("(max-width: 760px)").matches;

function abrirCarrinho(abrir = true) {
  const celular = abrir && ehCelular();
  $("#drawer").classList.toggle("is-open", abrir && !celular);
  $("#mcart").classList.toggle("is-open", celular);
  $("#mcart").setAttribute("aria-hidden", !celular);
  $("#overlay").classList.toggle("is-open", abrir);
  $("#overlay").classList.toggle("is-light", celular);
  if (abrir) { abrirMenu(false); $("#msearch")?.classList.remove("is-open"); }
}

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-show"), 2200);
}

function montarIcones(ctx = document) {
  $$("[data-icon]", ctx).forEach((el) => {
    if (!el.querySelector("svg")) el.insertAdjacentHTML("afterbegin", ICONES[el.dataset.icon]);
  });
}

function ativarBuscaSuspensa() {
  const btn = $("#search-toggle");
  const pop = $("#search-pop");
  if (!btn || !pop) return;
  btn.addEventListener("click", () => {
    pop.classList.toggle("is-open");
    if (pop.classList.contains("is-open")) $("input", pop).focus();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { pop.classList.remove("is-open"); abrirMenu(false); }
  });
}

function marcarLinkAtivo(atual) {
  $$(".header .nav > a, .mmenu__links > a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === atual));
}

/* ===========================================================
   Versão mobile: barra branca + menu lateral
   =========================================================== */
function montarMobile() {
  const L = SPA
    ? { inicio: "#inicio", produtos: "#produtos", pedidos: "#pedidos", salvos: "#salvos", cat: (c) => `#produtos" data-cat="${c}` }
    : { inicio: "index.html", produtos: "produtos.html", pedidos: "pedidos.html", salvos: "favoritos.html", cat: (c) => `produtos.html?categoria=${c}` };
  const busca = SPA ? "" : `action="produtos.html" method="get"`;

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="mbar">
      <button class="mbar__burger" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mmenu">
        <span></span><span></span><span></span>
      </button>
      <a class="mbar__logo" href="${L.inicio}"><img src="assets/img/logo.png" alt="ZeroOnze"></a>
      <div class="mbar__icons">
        <button class="icon-btn" id="msearch-toggle" data-icon="busca" aria-label="Buscar"></button>
        <a class="icon-btn account-link" href="${SPA ? "#entrar" : "entrar.html"}" data-icon="conta" data-account aria-label="Minha conta"></a>
        <button class="icon-btn" id="cart-open" data-icon="carrinho" aria-label="Carrinho"><span class="cart-count"></span></button>
      </div>
      <div class="mbar__search" id="msearch">
        <form class="search" ${busca} role="search">
          <input type="search" name="busca" placeholder="Procure seu produto" aria-label="Buscar produtos">
          <button type="submit" data-icon="lupa" aria-label="Buscar"></button>
        </form>
      </div>
    </div>

    <div class="moverlay" id="mmenu-overlay"></div>
    <nav class="mmenu" id="mmenu" aria-label="Menu">
      <div class="mmenu__profile" id="mmenu-profile" hidden>
        <p class="mmenu__hello display" id="mmenu-hello"></p>
        <div class="mmenu__links">
          <a href="${SPA ? "#conta" : "conta.html?aba=info"}" data-aba="info">Minhas Informações</a>
          <a href="${SPA ? "#conta" : "conta.html?aba=pagamentos"}" data-aba="pagamentos">Métodos de Pagamento</a>
          <a href="${SPA ? "#conta" : "conta.html?aba=salvos"}" data-aba="salvos">Produtos Salvos</a>
          <button class="mmenu__logout" id="mmenu-sair">Sair da conta</button>
        </div>
      </div>
      <p class="mmenu__title display">Páginas</p>
      <div class="mmenu__links">
        <a href="${L.inicio}">Home</a>
        <a href="${L.produtos}"${SPA ? ' data-cat=""' : ""}>Produtos</a>
        <button class="mmenu__cat" id="mmenu-cat" aria-expanded="false">Categorias <span aria-hidden="true">+</span></button>
        <div class="mmenu__sub" id="mmenu-sub" hidden>
          ${Object.entries(CATEGORIAS).map(([k, nome]) => `<a href="${L.cat(k)}">${nome}</a>`).join("")}
        </div>
        <a href="${L.pedidos}">Meus Pedidos</a>
      </div>
      <div class="mmenu__foot">
        <a class="mmenu__btn display" id="mmenu-entrar" href="${SPA ? "#entrar" : "entrar.html"}">Entrar</a>
        <a class="mmenu__signup" id="mmenu-cadastro" href="${SPA ? "#cadastro" : "cadastro.html"}">Faça seu cadastro</a>
      </div>
    </nav>
  `);

  const menu = $("#mmenu"), toggle = $("#menu-toggle"), sub = $("#mmenu-sub"), cat = $("#mmenu-cat");
  $("#menu-toggle").addEventListener("click", () => abrirMenu(!menu.classList.contains("is-open")));
  $("#mmenu-overlay").addEventListener("click", () => abrirMenu(false));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) abrirMenu(false); });
  cat.addEventListener("click", () => {
    sub.hidden = !sub.hidden;
    cat.setAttribute("aria-expanded", !sub.hidden);
    cat.querySelector("span").textContent = sub.hidden ? "+" : "−";
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { abrirMenu(false); abrirCarrinho(false); } });
  $("#mmenu-sair").addEventListener("click", () => {
    Conta.sair();
    abrirMenu(false);
    toast("Você saiu da conta.");
    navegarPara("inicio");
  });
  $("#mmenu-cadastro").addEventListener("click", (e) => {
    if (!Conta.atual()) return;
    e.preventDefault();
    e.stopPropagation();
    Conta.sair();
    abrirMenu(false);
    toast("Você saiu da conta.");
    navegarPara("inicio");
  });

  $("#msearch-toggle").addEventListener("click", () => {
    const s = $("#msearch");
    s.classList.toggle("is-open");
    if (s.classList.contains("is-open")) $("input", s).focus();
  });
}

function abrirMenu(abrir) {
  const menu = $("#mmenu");
  if (!menu) return;
  menu.classList.toggle("is-open", abrir);
  $("#mmenu-overlay").classList.toggle("is-open", abrir);
  $("#menu-toggle").classList.toggle("is-open", abrir);
  $("#menu-toggle").setAttribute("aria-expanded", abrir);
  $("#msearch").classList.remove("is-open");
  document.body.classList.toggle("no-scroll", abrir);
}

/* ---------- Eventos globais (delegação) ---------- */
function ativarEventos() {
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-qty],[data-remove],[data-unsave],#cart-open,#drawer-close,#overlay,#checkout,#mcart-ver,#mcart-esvaziar");
    if (!t) return;
    if (t.dataset.unsave) { Favoritos.alternar(t.dataset.unsave); return paginaSalvos(); }
    if (t.dataset.qty)    return Carrinho.alterar(t.dataset.qty, +t.dataset.delta);
    if (t.dataset.remove) return Carrinho.remover(t.dataset.remove);
    if (t.id === "cart-open") return abrirCarrinho(!$("#mcart").classList.contains("is-open"));
    if (t.id === "drawer-close" || t.id === "overlay") return abrirCarrinho(false);
    if (t.id === "checkout" || t.id === "mcart-ver") return Carrinho.irParaCheckout();
    if (t.id === "mcart-esvaziar") return Carrinho.esvaziar();
  });
}

/* ===========================================================
   Página inicial
   =========================================================== */
function paginaInicial() {
  const novo = $("#grid-novo");
  const destaque = $("#grid-destaque");
  if (novo) novo.innerHTML = PRODUTOS.filter((p) => p.novo).map(cardProduto).join("");
  if (destaque) destaque.innerHTML = PRODUTOS.filter((p) => p.destaque).map(cardProduto).join("");
}

/* ===========================================================
   Lista de produtos (busca, categoria e ordenação)
   =========================================================== */
const filtro = { busca: "", categoria: "" };

function paginaProdutos() {
  const grid = $("#grid-produtos");
  if (!grid) return;
  const { busca, categoria } = filtro;

  $$(".search input").forEach((c) => (c.value = busca));

  const titulo = $("#shop-title");
  if (busca) titulo.textContent = `Resultados para “${busca}”`;
  else if (CATEGORIAS[categoria]) titulo.textContent = `Categoria: ${CATEGORIAS[categoria]}`;
  else titulo.textContent = "Todos os produtos";

  let lista = PRODUTOS.map((p, i) => ({ ...p, ordem: i }));
  if (categoria) lista = lista.filter((p) => p.categoria === categoria);
  if (busca) {
    const termos = normalizar(busca).split(/\s+/);
    lista = lista.filter((p) => {
      const texto = normalizar(`${p.nome} ${CATEGORIAS[p.categoria]} ${p.tags}`);
      return termos.every((t) => texto.includes(t));
    });
  }

  // Chips de categoria (painel do funil)
  const painel = $("#filtro-painel");
  if (painel) {
    const link = (c) => SPA ? `href="#produtos" data-cat="${c}"` : `href="produtos.html${c ? `?categoria=${c}` : ""}"`;
    painel.innerHTML = [["", "Todas"], ...Object.entries(CATEGORIAS)].map(([k, nome]) =>
      `<a class="chip ${categoria === k && !busca ? "is-active" : ""}" ${link(k)}>${nome}</a>`).join("");
  }

  const modo = $("#sort").value;
  lista.sort((a, b) => {
    if (modo === "menor") return a.preco - b.preco;
    if (modo === "maior") return b.preco - a.preco;
    if (modo === "az")    return a.nome.localeCompare(b.nome, "pt-BR");
    return a.ordem - b.ordem;
  });

  const verTodos = SPA ? `href="#produtos" data-cat=""` : `href="produtos.html"`;
  grid.innerHTML = lista.length
    ? lista.map(cardProduto).join("")
    : `<p class="empty">Nenhum produto encontrado. <a ${verTodos} style="text-decoration:underline">Ver todos</a></p>`;
  $("#shop-count").textContent = `${lista.length} produto${lista.length === 1 ? "" : "s"}`;
}

function ativarFiltro() {
  const btn = $("#filter-toggle"), painel = $("#filtro-painel");
  if (!btn || !painel) return;
  btn.addEventListener("click", () => {
    painel.hidden = !painel.hidden;
    btn.classList.toggle("is-open", !painel.hidden);
    btn.setAttribute("aria-expanded", !painel.hidden);
  });
  painel.addEventListener("click", (e) => {
    if (!e.target.closest(".chip")) return;
    painel.hidden = true;
    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  });
}

/* ===========================================================
   Detalhes do produto
   =========================================================== */

/* 3 produtos relacionados: primeiro os da mesma categoria, depois completa com outros */
function relacionados(p) {
  const outros = PRODUTOS.filter((x) => x.id !== p.id);
  return [
    ...outros.filter((x) => x.categoria === p.categoria),
    ...outros.filter((x) => x.categoria !== p.categoria),
  ].slice(0, 3);
}
function paginaProduto(id) {
  const alvo = $("#produto");
  if (!alvo) return;
  const p = produto(id);

  if (!p) {
    alvo.innerHTML = `<p class="empty" style="padding:120px 0">Produto não encontrado.</p>`;
    return;
  }

  document.title = `${p.nome} — ZeroOnze`;
  const escolha = { tamanho: null, cor: p.cor, lado: "costas" };

  const midia = p.img
    ? `<img src="${fotoDe(p, escolha.cor)}" alt="Camiseta ${p.nome}" id="produto-foto">`
    : `<div class="card__placeholder">Imagem em breve</div>`;

  // Pré-carrega as fotos das outras cores para a troca ser instantânea
  [...Object.values(p.imgs || {}), ...Object.values(p.frente || {})].forEach((src) => { new Image().src = src; });

  alvo.innerHTML = `
    <section class="product">
      <div class="product__gallery">
        <div class="product__media">${midia}</div>
        <div class="views" id="produto-lados" role="tablist" aria-label="Ver frente ou costas" hidden></div>
      </div>

      <div class="product__info">
        <h1 class="product__title display">${p.nome}</h1>
        <p class="product__price">${brl(p.preco)}</p>

        <div class="product__about">
          <h2 class="product__label display">Descrição:</h2>
          <p class="product__desc">${p.descricao}</p>
        </div>

        <div class="product__opts">
          <div class="opt opt--tamanho">
            <h2 class="product__label display">Tamanho:</h2>
            <div class="sizes" role="radiogroup" aria-label="Tamanho">
              ${TAMANHOS.map((t) => `<button class="size" data-size="${t}" role="radio" aria-checked="false">${t}</button>`).join("")}
            </div>
          </div>
          <div class="opt opt--cor">
            <h2 class="product__label product__label--tight display">Cor:</h2>
            <div class="colors" role="radiogroup" aria-label="Cor">
              ${Object.entries(CORES).map(([k, nome]) => `
                <button class="color color--${k}" data-color="${k}" role="radio" aria-label="${nome}" title="${nome}"></button>`).join("")}
            </div>
          </div>
        </div>

        <p class="product__error" id="produto-erro" aria-live="polite"></p>

        <button class="btn-add" id="btn-add" data-icon="carrinho">Adicionar ao carrinho</button>
        <div class="product__actions">
          <button class="btn-outline" id="btn-salvar"></button>
          <button class="btn-outline" id="btn-comprar">Comprar agora</button>
        </div>
      </div>
    </section>

    <section class="related container">
      <h2 class="section__title display">Produtos relacionados</h2>
      <div class="grid grid--shop">
        ${relacionados(p).map(cardProduto).join("")}
      </div>
    </section>`;

  montarIcones(alvo);

  const atualizarEscolha = () => {
    $$(".size", alvo).forEach((b) => {
      const sel = b.dataset.size === escolha.tamanho;
      b.classList.toggle("is-selected", sel);
      b.setAttribute("aria-checked", sel);
    });
    $$(".color", alvo).forEach((b) => {
      const sel = b.dataset.color === escolha.cor;
      b.classList.toggle("is-selected", sel);
      b.setAttribute("aria-checked", sel);
    });
    // Frente / costas: só aparece se houver foto da frente para a cor escolhida
    const frente = frenteDe(p, escolha.cor);
    if (!frente) escolha.lado = "costas";
    const costas = fotoDe(p, escolha.cor);
    const lados = $("#produto-lados");
    lados.hidden = !frente;
    if (frente) {
      lados.innerHTML = [["costas", "Costas", costas], ["frente", "Frente", frente]].map(([k, nome, src]) => `
        <button class="view ${escolha.lado === k ? "is-selected" : ""}" data-lado="${k}" role="tab" aria-selected="${escolha.lado === k}">
          <img src="${src}" alt=""><span>${nome}</span>
        </button>`).join("");
    }

    const foto = $("#produto-foto");
    if (foto) {
      foto.src = escolha.lado === "frente" ? frente : costas;
      foto.alt = `Camiseta ${p.nome} ${CORES[escolha.cor].toLowerCase()} — ${escolha.lado}`;
    }
    const salvo = Favoritos.tem(p.id);
    $("#btn-salvar").textContent = salvo ? "Salvo ✓" : "Salvar";
    $("#btn-salvar").classList.toggle("is-active", salvo);
  };

  const adicionar = () => {
    if (!escolha.tamanho) {
      $("#produto-erro").textContent = "Selecione um tamanho.";
      return false;
    }
    $("#produto-erro").textContent = "";
    Carrinho.adicionar(p.id, escolha.tamanho, escolha.cor);
    return true;
  };

  $$(".size", alvo).forEach((b) => b.addEventListener("click", () => {
    escolha.tamanho = b.dataset.size;
    $("#produto-erro").textContent = "";
    atualizarEscolha();
  }));
  $("#produto-lados").addEventListener("click", (e) => {
    const b = e.target.closest("[data-lado]");
    if (!b) return;
    escolha.lado = b.dataset.lado;
    atualizarEscolha();
  });
  $$(".color", alvo).forEach((b) => b.addEventListener("click", () => {
    escolha.cor = b.dataset.color;
    atualizarEscolha();
  }));
  $("#btn-add").addEventListener("click", adicionar);
  $("#btn-comprar").addEventListener("click", () => { if (adicionar()) abrirCarrinho(true); });
  $("#btn-salvar").addEventListener("click", () => { Favoritos.alternar(p.id); atualizarEscolha(); });

  atualizarEscolha();
}

/* ===========================================================
   Checkout (identificação → entrega → pagamento)
   =========================================================== */
const FRETE = 24.69;
const FRETE_GRATIS_A_PARTIR = 200;
const CUPONS = { ZEROONZE10: 0.10 };   // código: percentual de desconto

const so = (v) => v.replace(/\D/g, "");
const MASCARAS = {
  cpf:      (v) => so(v).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2"),
  celular:  (v) => so(v).slice(0, 11).replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2"),
  cep:      (v) => so(v).slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2"),
  cartao:   (v) => so(v).slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 "),
  validade: (v) => so(v).slice(0, 4).replace(/(\d{2})(\d)/, "$1/$2"),
};

const VALIDA = {
  nome: (v) => v.trim().split(/\s+/).length >= 2 || "Informe nome e sobrenome.",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "E-mail inválido.",
  cpf: (v) => {
    const c = so(v);
    if (c.length !== 11 || /^(\d)\1+$/.test(c)) return "CPF inválido.";
    for (const t of [9, 10]) {
      let soma = 0;
      for (let i = 0; i < t; i++) soma += +c[i] * (t + 1 - i);
      if (((soma * 10) % 11) % 10 !== +c[t]) return "CPF inválido.";
    }
    return true;
  },
  celular: (v) => so(v).length >= 10 || "Celular inválido.",
  cep: (v) => so(v).length === 8 || "CEP inválido.",
  endereco: (v) => !!v.trim() || "Informe o endereço.",
  numero: (v) => !!v.trim() || "Obrigatório.",
  bairro: (v) => !!v.trim() || "Informe o bairro.",
  destinatario: (v) => !!v.trim() || "Informe quem vai receber.",
  cartao: (v) => {
    const n = so(v);
    if (n.length < 13) return "Número do cartão inválido.";
    let soma = 0;                                   // algoritmo de Luhn
    [...n].reverse().forEach((d, i) => {
      let x = +d;
      if (i % 2) { x *= 2; if (x > 9) x -= 9; }
      soma += x;
    });
    return soma % 10 === 0 || "Número do cartão inválido.";
  },
  titular: (v) => !!v.trim() || "Informe o nome do titular.",
  validade: (v) => {
    const [m, a] = v.split("/").map(Number);
    if (!m || m > 12 || !a) return "Validade inválida.";
    const fim = new Date(2000 + a, m, 0, 23, 59);
    return fim >= new Date() || "Cartão vencido.";
  },
  cvv: (v) => /^\d{3,4}$/.test(v) || "CVV inválido.",
};

/* Valida os campos de um formulário e mostra os erros embaixo de cada um */
function validarCampos(form, nomes) {
  let ok = true;
  nomes.forEach((n) => {
    const input = form.elements[n];
    const campo = input.closest(".field, .afield");
    const r = VALIDA[n] ? VALIDA[n](input.value) : true;
    let erro = campo.querySelector(".field__error");
    if (!erro) { erro = document.createElement("small"); erro.className = "field__error"; campo.append(erro); }
    erro.textContent = r === true ? "" : r;
    campo.classList.toggle("is-invalid", r !== true);
    if (r !== true && ok) { input.focus(); ok = false; }
  });
  return ok;
}

const Checkout = {
  dados: storage.get("zo_checkout", {}),
  cupom: null,
  ligado: false,

  valores() {
    const subtotal = Carrinho.total();
    const desconto = this.cupom ? subtotal * CUPONS[this.cupom] : 0;
    const base = subtotal - desconto;
    const frete = !subtotal || base >= FRETE_GRATIS_A_PARTIR ? 0 : FRETE;
    return { subtotal, desconto, frete, total: base + frete };
  },

  renderResumo() {
    const alvo = $("#sum-itens");
    if (!alvo) return;
    const v = this.valores();

    $("#sum-produtos").textContent = brl(v.subtotal);
    $("#linha-desconto").hidden = !v.desconto;
    $("#sum-desconto").textContent = `− ${brl(v.desconto)}`;
    $("#sum-frete").textContent = v.subtotal ? (v.frete ? `+ ${brl(v.frete)}` : "Grátis") : "—";
    $("#sum-total").textContent = brl(v.total);

    const linkLista = SPA ? `href="#produtos" data-cat=""` : `href="produtos.html"`;
    alvo.innerHTML = !Carrinho.itens.length
      ? `<p class="sum-empty">Seu carrinho está vazio.<br><a ${linkLista} style="text-decoration:underline">Ver produtos</a></p>`
      : Carrinho.itens.map((i) => {
          const p = produto(i.id);
          const k = chaveItem(i);
          const foto = fotoDe(p, i.cor);
          const thumb = foto ? `<img src="${foto}" alt="">` : `<div class="thumb"></div>`;
          return `
            <div class="sum-item">
              ${thumb}
              <div>
                <b>${p.nome}</b>
                <p>Tamanho: ${i.tamanho} · ${CORES[i.cor]}</p>
                <p>${brl(p.preco)}</p>
                <div class="qty">
                  <button data-qty="${k}" data-delta="-1" aria-label="Diminuir">−</button>
                  <span>${i.qtd}</span>
                  <button data-qty="${k}" data-delta="1" aria-label="Aumentar">+</button>
                  <button class="sum-item__remove" data-remove="${k}">remover</button>
                </div>
              </div>
            </div>`;
        }).join("");

    // Parcelas (até 12x sem juros)
    const sel = $("#parcelas");
    const atual = sel.value;
    sel.innerHTML = Array.from({ length: 12 }, (_, n) =>
      `<option value="${n + 1}">${n + 1}x de ${brl(v.total / (n + 1))} sem juros</option>`).join("");
    if (atual) sel.value = atual;

    $("#form-pagamento button[type=submit]").disabled = !Carrinho.itens.length;
  },

  /* Libera/trava as etapas conforme o que já foi preenchido */
  atualizarEtapas() {
    const { id, entrega } = this.dados;
    const eId = $("#etapa-id"), eEnt = $("#etapa-entrega"), ePag = $("#etapa-pagamento");

    eId.classList.toggle("is-done", !!id && !this.editando?.id);
    eEnt.classList.toggle("is-locked", !id);
    eEnt.classList.toggle("is-done", !!entrega && !this.editando?.entrega);
    ePag.classList.toggle("is-locked", !id || !entrega);

    if (id) $("#resumo-id").innerHTML = `${id.nome}<br>${id.email}<br>${id.celular}<br><button class="panel__edit" data-editar="id">Alterar</button>`;
    if (entrega) $("#resumo-entrega").innerHTML =
      `${entrega.endereco}, ${entrega.numero}${entrega.complemento ? " — " + entrega.complemento : ""}<br>${entrega.bairro} · CEP ${entrega.cep}<br>Para: ${entrega.destinatario}<br><button class="panel__edit" data-editar="entrega">Alterar</button>`;
  },

  preencher(form, obj) {
    if (!obj) return;
    Object.entries(obj).forEach(([k, v]) => { if (form.elements[k]) form.elements[k].value = v; });
  },

  iniciar() {
    if (!$("[data-checkout]")) return;
    this.renderResumo();
    this.editando = {};
    this.atualizarEtapas();
    if (this.ligado) return;
    this.ligado = true;

    const fId = $("#form-id"), fEnt = $("#form-entrega"), fPag = $("#form-pagamento");
    // Cliente logado: já preenche identificação e entrega com os dados da conta
    const conta = Conta.atual();
    if (conta && !this.dados.id) {
      this.preencher(fId, { nome: conta.nome, email: conta.email, cpf: conta.cpf, celular: conta.celular });
      this.preencher(fEnt, { cep: conta.cep, endereco: conta.endereco, numero: conta.numero, bairro: conta.bairro,
                             complemento: conta.complemento, destinatario: conta.nome });
    }
    this.preencher(fId, this.dados.id);
    this.preencher(fEnt, this.dados.entrega);

    // Máscaras
    $$("[data-mask]").forEach((inp) =>
      inp.addEventListener("input", () => { inp.value = MASCARAS[inp.dataset.mask](inp.value); }));

    // Busca o endereço pelo CEP (ViaCEP). Se não houver internet, o cliente preenche à mão.
    fEnt.elements.cep.addEventListener("input", async (e) => {
      const cep = so(e.target.value);
      if (cep.length !== 8) return;
      try {
        const r = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const d = await r.json();
        if (d.erro) return;
        if (!fEnt.elements.endereco.value) fEnt.elements.endereco.value = `${d.logradouro}${d.localidade ? ` — ${d.localidade}/${d.uf}` : ""}`;
        if (!fEnt.elements.bairro.value) fEnt.elements.bairro.value = d.bairro;
        fEnt.elements.numero.focus();
      } catch { /* sem conexão: segue manual */ }
    });

    fId.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validarCampos(fId, ["nome", "email", "cpf", "celular"])) return;
      this.dados.id = Object.fromEntries(new FormData(fId));
      if (!fEnt.elements.destinatario.value) fEnt.elements.destinatario.value = this.dados.id.nome;
      storage.set("zo_checkout", this.dados);
      this.editando.id = false;
      this.atualizarEtapas();
      if (!this.dados.entrega) fEnt.elements.cep.focus();
    });

    fEnt.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validarCampos(fEnt, ["cep", "endereco", "numero", "bairro", "destinatario"])) return;
      this.dados.entrega = Object.fromEntries(new FormData(fEnt));
      storage.set("zo_checkout", this.dados);
      this.editando.entrega = false;
      this.atualizarEtapas();
    });

    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-editar]");
      if (!b) return;
      this.editando[b.dataset.editar] = true;
      this.atualizarEtapas();
    });

    // Cupom
    $("#aplicar-cupom").addEventListener("click", () => {
      const cod = $("#cupom").value.trim().toUpperCase();
      const msg = $("#cupom-msg");
      if (CUPONS[cod]) {
        this.cupom = cod;
        msg.textContent = `Cupom ${cod} aplicado: ${CUPONS[cod] * 100}% de desconto.`;
        msg.className = "coupon__msg ok";
      } else {
        this.cupom = null;
        msg.textContent = "Cupom inválido.";
        msg.className = "coupon__msg err";
      }
      this.renderResumo();
    });

    // Finalizar
    fPag.addEventListener("submit", (e) => {
      e.preventDefault();
      const erro = $("#erro-pagamento");
      const metodo = fPag.elements.metodo.value;
      if (!metodo) { erro.textContent = "Escolha uma forma de pagamento."; return; }
      erro.textContent = "";
      if (metodo === "cartao" && !validarCampos(fPag, ["cartao", "titular", "validade", "cvv"])) return;

      const v = this.valores();
      const ent = this.dados.entrega;
      const parcelas = +fPag.elements.parcelas.value;
      Carrinho.criarPedido({
        total: v.total,
        frete: v.frete,
        desconto: v.desconto,
        entrega: `${ent.endereco}, ${ent.numero} — ${ent.bairro}, CEP ${ent.cep}`,
        // Por segurança, só os 4 últimos dígitos do cartão são guardados
        pagamento: metodo === "pix"
          ? "PIX"
          : `Cartão final ${so(fPag.elements.cartao.value).slice(-4)} em ${parcelas}x de ${brl(v.total / parcelas)}`,
        status: metodo === "pix" ? "Aguardando pagamento PIX" : "Pagamento aprovado",
      });
      fPag.reset();
      this.cupom = null;
      $("#cupom").value = "";
      $("#cupom-msg").textContent = "";
      if (SPA) irPara("pedidos");
      else location.href = "pedidos.html";
    });
  },
};

/* ===========================================================
   Produtos salvos (ícone de conta)
   =========================================================== */
function paginaSalvos() {
  const grid = $("#grid-salvos");
  if (!grid) return;
  // Com conta aberta, os salvos ficam em Meu Perfil
  if (!SPA && Conta.atual()) { location.replace("conta.html?aba=salvos"); return; }
  const salvos = [...Favoritos.ids].reverse().map(produto).filter(Boolean);   // mais recentes primeiro
  const linkLista = SPA ? `href="#produtos" data-cat=""` : `href="produtos.html"`;

  $("#salvos-count").textContent = salvos.length
    ? `${salvos.length} produto${salvos.length === 1 ? "" : "s"} que você curtiu`
    : "";

  grid.innerHTML = salvos.length
    ? salvos.map((p) => cardProduto(p).replace(
        "</article>",
        `<button class="card__unsave" data-unsave="${p.id}">Remover dos salvos</button></article>`)).join("")
    : `<div class="empty">
         <p>Você ainda não salvou nenhuma camisa.</p>
         <p style="margin-top:8px">Na página de um produto, clique em <b>Salvar</b> para guardar aqui as que você curtiu.</p>
         <a class="btn" ${linkLista} style="margin-top:20px">Ver produtos</a>
       </div>`;
}

/* ===========================================================
   Conta do cliente (entrar, criar conta, meu perfil)
   Protótipo: as contas ficam salvas só neste navegador
   (localStorage). A senha é guardada como resumo SHA-256,
   nunca em texto. Num site no ar isso deve ir para um servidor.
   =========================================================== */
const Conta = {
  contas: storage.get("zo_contas", []),
  sessao: storage.get("zo_sessao", null),

  atual() { return this.contas.find((c) => c.email === this.sessao) || null; },
  salvar() { storage.set("zo_contas", this.contas); storage.set("zo_sessao", this.sessao); atualizarLinksConta(); },
  async resumo(texto) {
    try {
      const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("zo:" + texto));
      return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch {
      let h = 0; for (const ch of "zo:" + texto) h = (h * 31 + ch.charCodeAt(0)) | 0;   // reserva simples
      return "h" + h;
    }
  },
  sair() { this.sessao = null; this.salvar(); },
  // Apelido escolhido (inteiro); sem apelido, o primeiro nome do "Nome completo"
  primeiroNome(c) { return (c.apelido || "").trim() || (c.nome || "").trim().split(/\s+/)[0]; },
};

const linkPara = (view) => (SPA ? `#${view}` : `${view === "inicio" ? "index" : view}.html`);
function navegarPara(view) {
  if (SPA) irPara(view); else location.href = linkPara(view);
}

function atualizarLinksConta() {
  const c = Conta.atual();
  $$("[data-account]").forEach((a) => {
    a.setAttribute("href", linkPara(c ? "conta" : "entrar"));
    a.setAttribute("aria-label", c ? "Meu perfil" : "Entrar na conta");
    a.title = c ? "Meu perfil" : "Entrar na conta";
    const ola = a.querySelector(".account-hello");
    if (ola) ola.textContent = c ? `Salve, ${Conta.primeiroNome(c)}` : "";
  });
  // "Meus pedidos" do menu: com conta aberta, leva para Meu Perfil › Meus Pedidos
  $$(".nav a, .mmenu__links > a").forEach((a) => {
    if (a.textContent.trim().toLowerCase() !== "meus pedidos") return;
    if (c) { a.setAttribute("href", SPA ? "#conta" : "conta.html?aba=pedidos"); a.dataset.aba = "pedidos"; }
    else { a.setAttribute("href", linkPara("pedidos")); delete a.dataset.aba; }
  });
  const perfil = $("#mmenu-profile");
  if (perfil) {
    perfil.hidden = !c;
    $("#mmenu-hello").textContent = c ? `Salve, ${Conta.primeiroNome(c)}` : "";
    $(".mmenu__foot").hidden = !!c;
  }
  const btn = $("#mmenu-entrar"), cad = $("#mmenu-cadastro");
  if (btn) { btn.textContent = c ? "Meu Perfil" : "Entrar"; btn.setAttribute("href", linkPara(c ? "conta" : "entrar")); }
  if (cad) { cad.textContent = c ? "Sair da conta" : "Faça seu cadastro"; cad.setAttribute("href", c ? "#" : linkPara("cadastro")); }
}

function marcarErro(alvo, msg) { const el = $(alvo); if (el) el.textContent = msg || ""; }

/* ---------- Acessar conta ---------- */
let entrarLigado = false;
function paginaEntrar() {
  const form = $("#form-login");
  if (!form) return;
  if (Conta.atual() && !SPA) { location.replace("conta.html"); return; }
  marcarErro("#login-erro");
  if (entrarLigado) return;
  entrarLigado = true;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const login = form.elements.login.value.trim().toLowerCase();
    const senha = form.elements.senha.value;
    if (!login || !senha) return marcarErro("#login-erro", "Preencha login e senha.");
    const conta = Conta.contas.find((c) =>
      c.email === login || normalizar(c.apelido || "") === normalizar(login));
    if (!conta || conta.senha !== (await Conta.resumo(senha))) {
      return marcarErro("#login-erro", "Login ou senha incorretos.");
    }
    Conta.sessao = conta.email;
    Conta.salvar();
    form.reset();
    toast(`Salve, ${Conta.primeiroNome(conta)}!`);
    navegarPara("conta");
  });
  $("[data-em-breve-senha]").addEventListener("click", () =>
    marcarErro("#login-erro", "Recuperação de senha chega em breve. Por enquanto, crie uma nova conta ou fale com zeroonze.co@gmail.com."));
  $$("[data-social]").forEach((b) => b.addEventListener("click", () => toast(`Login com ${b.dataset.social} chega em breve!`)));
}

/* ---------- Criar conta ---------- */
let cadastroLigado = false;
function paginaCadastro() {
  const form = $("#form-cadastro");
  if (!form) return;
  marcarErro("#cadastro-erro");
  if (cadastroLigado) return;
  cadastroLigado = true;

  $$("[data-mask]", form).forEach((inp) =>
    inp.addEventListener("input", () => { inp.value = MASCARAS[inp.dataset.mask](inp.value); }));

  form.elements.cep.addEventListener("input", async (e) => {
    const cep = so(e.target.value);
    if (cep.length !== 8) return;
    try {
      const d = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
      if (d.erro) return;
      if (!form.elements.endereco.value) form.elements.endereco.value = d.logradouro;
      if (!form.elements.bairro.value) form.elements.bairro.value = d.bairro;
      if (!form.elements.cidade.value) form.elements.cidade.value = `${d.localidade}/${d.uf}`;
      form.elements.numero.focus();
    } catch { /* sem conexão: preenchimento manual */ }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    marcarErro("#cadastro-erro");
    VALIDA.cidade = (v) => !!v.trim() || "Informe a cidade.";
    VALIDA.senha = (v) => v.length >= 6 || "Use pelo menos 6 caracteres.";
    VALIDA.senha2 = (v) => v === form.elements.senha.value || "As senhas não conferem.";
    const ok = validarCampos(form, ["nome", "cpf", "email", "celular", "senha", "senha2", "cep", "endereco", "numero", "bairro", "cidade"]);
    if (!ok) return marcarErro("#cadastro-erro", "Confira os campos destacados.");

    const d = Object.fromEntries(new FormData(form));
    d.email = d.email.trim().toLowerCase();
    if (Conta.contas.some((c) => c.email === d.email)) {
      return marcarErro("#cadastro-erro", "Já existe uma conta com este e-mail. Acesse sua conta.");
    }
    const conta = {
      nome: d.nome.trim(), apelido: d.apelido.trim(), cpf: d.cpf, email: d.email, celular: d.celular,
      cep: d.cep, endereco: d.endereco.trim(), numero: d.numero.trim(), bairro: d.bairro.trim(),
      cidade: d.cidade.trim(), complemento: d.complemento.trim(),
      newsletter: !!form.elements.newsletter.checked,
      senha: await Conta.resumo(d.senha),
      criadaEm: new Date().toISOString(),
    };
    Conta.contas.push(conta);
    Conta.sessao = conta.email;
    Conta.salvar();
    form.reset();
    toast("Conta criada! Bem-vindo à ZeroOnze.");
    navegarPara("conta");
  });
}

/* ---------- Status do pedido (simulado pelo tempo desde a compra) ---------- */
function statusPedido(p) {
  if ((p.status || "").includes("PIX")) return { tipo: "andamento", texto: "Aguardando pagamento" };
  const dias = (Date.now() - new Date(p.data)) / 864e5;
  if (dias >= 5) return { tipo: "ok", texto: "Produto recebido" };
  if (dias >= 1) return { tipo: "andamento", texto: "Produto em trânsito" };
  return { tipo: "novo", texto: "Em separação" };
}

/* ---------- Meu perfil ---------- */
let contaAba = "info";
let contaEditando = false;
let contaLigada = false;

function paginaConta() {
  const painel = $("#conta-painel");
  if (!painel) return;
  const c = Conta.atual();
  if (!c) { if (SPA) irPara("entrar"); else location.replace("entrar.html"); return; }

  if (!contaLigada) {
    contaLigada = true;
    const abaUrl = !SPA && new URLSearchParams(location.search).get("aba");
    if (abaUrl) contaAba = abaUrl;
    $$(".profile-menu__item[data-aba]").forEach((b) =>
      b.addEventListener("click", () => { contaAba = b.dataset.aba; contaEditando = false; paginaConta(); }));
    $("#conta-sair").addEventListener("click", () => { Conta.sair(); toast("Você saiu da conta."); navegarPara("inicio"); });
    painel.addEventListener("click", (e) => {
      if (e.target.closest("[data-editar-info]")) { contaEditando = true; paginaConta(); }
      if (e.target.closest("[data-cancelar-info]")) { contaEditando = false; paginaConta(); }
      const un = e.target.closest("[data-unsave-conta]");
      if (un) { Favoritos.alternar(un.dataset.unsaveConta); paginaConta(); }
    });
    painel.addEventListener("submit", (e) => {
      if (e.target.id !== "form-info") return;
      e.preventDefault();
      const f = e.target;
      VALIDA.cidade = (v) => !!v.trim() || "Informe a cidade.";
      if (!validarCampos(f, ["nome", "cpf", "celular", "cep", "endereco", "numero", "bairro", "cidade"])) return;
      const d = Object.fromEntries(new FormData(f));
      Object.assign(Conta.atual(), {
        nome: d.nome.trim(), apelido: d.apelido.trim(), cpf: d.cpf, celular: d.celular, cep: d.cep,
        endereco: d.endereco.trim(), numero: d.numero.trim(), bairro: d.bairro.trim(),
        cidade: d.cidade.trim(), complemento: d.complemento.trim(),
      });
      Conta.salvar();
      contaEditando = false;
      toast("Informações atualizadas");
      paginaConta();
    });
  }

  $$(".profile-menu__item[data-aba]").forEach((b) => b.classList.toggle("is-active", b.dataset.aba === contaAba));
  const linha = (rot, val) => `<p class="info-row"><span>${rot}:</span> ${val || "—"}</p>`;
  const linkLista = SPA ? `href="#produtos" data-cat=""` : `href="produtos.html"`;
  let html = "";

  if (contaAba === "info" && !contaEditando) {
    html = `
      <div class="profile-panel__head">
        <h1 class="display">Minhas Informações</h1>
        <button class="profile-panel__link" data-editar-info>Quer mudar alguma informação?</button>
      </div>
      <h2 class="profile-panel__sub display">Informações Pessoais</h2>
      ${linha("Nome", c.nome)}${linha("Como prefere ser chamado", c.apelido)}${linha("CPF", c.cpf)}${linha("Email", c.email)}${linha("Celular", c.celular)}
      <hr class="profile-panel__hr">
      <h2 class="profile-panel__sub display">Informações de Entrega</h2>
      ${linha("Endereço", `${c.endereco}, ${c.numero}${c.complemento ? " — " + c.complemento : ""}`)}${linha("Bairro", c.bairro)}${linha("Cidade", c.cidade)}${linha("CEP", c.cep)}
      <button class="profile-panel__link profile-panel__link--bottom" data-editar-info>Quer editar algum dado?</button>`;
  } else if (contaAba === "info") {
    const campo = (rot, name, val, extra = "") =>
      `<label class="afield"><span>${rot}</span><input name="${name}" value="${(val || "").replace(/"/g, "&quot;")}" ${extra}></label>`;
    html = `
      <div class="profile-panel__head"><h1 class="display">Editar informações</h1></div>
      <form id="form-info" class="info-form" novalidate>
        <h2 class="profile-panel__sub display">Informações Pessoais</h2>
        ${campo("Nome Completo *", "nome", c.nome)}
        ${campo("Como prefere ser chamado?", "apelido", c.apelido)}
        ${campo("CPF *", "cpf", c.cpf, 'inputmode="numeric" data-mask="cpf"')}
        ${campo("Celular *", "celular", c.celular, 'inputmode="numeric" data-mask="celular"')}
        <p class="info-form__note">O e-mail (${c.email}) é seu login e não pode ser trocado aqui.</p>
        <h2 class="profile-panel__sub display">Informações de Entrega</h2>
        ${campo("CEP *", "cep", c.cep, 'inputmode="numeric" data-mask="cep"')}
        ${campo("Endereço *", "endereco", c.endereco)}
        ${campo("Número *", "numero", c.numero, 'inputmode="numeric"')}
        ${campo("Bairro *", "bairro", c.bairro)}
        ${campo("Cidade *", "cidade", c.cidade)}
        ${campo("Complemento", "complemento", c.complemento)}
        <div class="info-form__actions">
          <button type="button" class="auth-btn auth-btn--ghost display" data-cancelar-info>Cancelar</button>
          <button type="submit" class="auth-btn display">Salvar</button>
        </div>
      </form>`;
  } else if (contaAba === "pedidos") {
    const pedidos = storage.get("zo_pedidos", []);
    // Nº do pedido em sequência (o mais antigo é o 01), como no layout
    const total = pedidos.length;
    html = `<div class="profile-panel__head"><h1 class="display">Meus Pedidos</h1><span class="porders__status-h">STATUS</span></div>` + (total
      ? `<div class="porders">${pedidos.map((p, idx) => {
          const st = statusPedido(p);
          const num = String(total - idx).padStart(2, "0");
          return `<div class="porders__group">${p.itens.map((i) => {
            const prod = produto(i.id);
            const foto = prod ? fotoDe(prod, i.cor) : null;
            const nome = i.produto
              ? `${i.produto} - ${i.tamanho} - ${CORES[i.cor] === "Branco" ? "Branca" : "Preta"}`
              : i.nome;
            const link = prod ? linkProduto(prod.id) : null;
            return `
              <div class="porders__row">
                ${foto ? `<a class="porders__thumb" href="${link}"><img src="${foto}" alt=""></a>` : `<div class="porders__thumb"></div>`}
                <div class="porders__info">
                  <p class="porders__num">Pedido nº ${num}${i.qtd > 1 ? ` · ${i.qtd} unidades` : ""}</p>
                  <p class="porders__name display">${nome}</p>
                  <p class="porders__meta">${new Date(p.data).toLocaleDateString("pt-BR")} · ${brl(i.preco * i.qtd)}</p>
                </div>
                <p class="porders__status-wrap"><span class="porders__status-lbl display">STATUS</span><span class="porders__status porders__status--${st.tipo} display">${st.texto}</span></p>
              </div>`;
          }).join("")}</div>`;
        }).join("")}</div>`
      : `<p class="profile-empty">Você ainda não fez nenhum pedido. <a ${linkLista}>Ver produtos</a></p>`);
  } else if (contaAba === "pagamentos") {
    const usados = [...new Set(storage.get("zo_pedidos", []).map((p) => (p.pagamento || "").split(" em ")[0]).filter(Boolean))];
    html = `<div class="profile-panel__head"><h1 class="display">Métodos de Pagamento</h1></div>` + (usados.length
      ? usados.map((m) => `<p class="info-row"><span>Usado:</span> ${m}</p>`).join("")
      : `<p class="profile-empty">Nenhum pagamento feito ainda.</p>`) +
      `<p class="info-form__note">Por segurança, o site guarda só os 4 últimos dígitos do cartão. O número completo é digitado a cada compra.</p>`;
  } else if (contaAba === "salvos") {
    const salvos = [...Favoritos.ids].reverse().map(produto).filter(Boolean);
    html = `<div class="profile-panel__head"><h1 class="display">Produtos Salvos</h1></div>` + (salvos.length
      ? `<div class="profile-saved">${salvos.map((p) => cardProduto(p).replace("</article>",
          `<button class="card__unsave" data-unsave-conta="${p.id}">Remover dos salvos</button></article>`)).join("")}</div>`
      : `<p class="profile-empty">Nenhuma camisa salva. Na página de um produto, clique em <b>Salvar</b>. <a ${linkLista}>Ver produtos</a></p>`);
  }
  painel.innerHTML = html;
  $$("[data-mask]", painel).forEach((inp) =>
    inp.addEventListener("input", () => { inp.value = MASCARAS[inp.dataset.mask](inp.value); }));
}

/* ===========================================================
   Meus pedidos
   =========================================================== */
function paginaPedidos() {
  const alvo = $("#lista-pedidos");
  if (!alvo) return;
  const pedidos = storage.get("zo_pedidos", []);
  const linkLista = SPA ? `href="#produtos" data-cat=""` : `href="produtos.html"`;

  if (!pedidos.length) {
    alvo.innerHTML = `
      <p>Você ainda não fez nenhum pedido.</p>
      <a class="btn" ${linkLista} style="margin-top:12px">Ver produtos</a>`;
    return;
  }

  alvo.innerHTML = pedidos.map((p) => `
    <div class="order">
      <div class="order__head">
        <strong>Pedido #${p.numero}</strong>
        <span>${new Date(p.data).toLocaleDateString("pt-BR")} · ${p.status || "Em separação"}</span>
      </div>
      <ul>
        ${p.itens.map((i) => `<li><span>${i.qtd}× ${i.nome}</span><span>${brl(i.preco * i.qtd)}</span></li>`).join("")}
      </ul>
      ${p.frete !== undefined ? `<p style="font-size:14px;color:#aaa;margin:10px 0 0">Frete: ${p.frete ? brl(p.frete) : "Grátis"}${p.desconto ? ` · Desconto: −${brl(p.desconto)}` : ""}</p>` : ""}
      ${p.entrega ? `<p style="font-size:14px;color:#aaa;margin:4px 0 0">Entrega: ${p.entrega}</p>` : ""}
      ${p.pagamento ? `<p style="font-size:14px;color:#aaa;margin:4px 0 0">Pagamento: ${p.pagamento}</p>` : ""}
      <p class="order__total">Total: ${brl(p.total)}</p>
    </div>`).join("");
}

/* ===========================================================
   Modo multipáginas (arquivos separados no VS Code)
   =========================================================== */
function iniciarMultipaginas() {
  const pagina = location.pathname.split("/").pop() || "index.html";
  const params = new URLSearchParams(location.search);

  marcarLinkAtivo(pagina);
  paginaInicial();

  if ($("#grid-produtos")) {
    filtro.busca = params.get("busca") || "";
    filtro.categoria = params.get("categoria") || "";
    $("#sort").addEventListener("change", paginaProdutos);
    paginaProdutos();
  }
  paginaProduto(params.get("id"));
  paginaPedidos();
  paginaSalvos();
  paginaEntrar();
  paginaCadastro();
  paginaConta();
  Checkout.iniciar();
}

/* ===========================================================
   Modo página única (prévia): troca de "aba" sem recarregar.
   A rota fica guardada numa variável; o #hash é só um extra
   (alguns visualizadores, como a prévia do Claude, bloqueiam
   ou apagam o #hash, então o site não depende dele).
   =========================================================== */
const VIEWS = ["inicio", "produtos", "produto", "checkout", "pedidos", "salvos", "privacidade", "entrar", "cadastro", "conta", "newsletter"];
let rotaAtual = null;

const rotaValida = (r) => !!r && (VIEWS.includes(r) || (r.startsWith("produto-") && !!produto(r.slice(8))));

function irPara(rota) {
  if (!rotaValida(rota)) rota = "inicio";
  rotaAtual = rota;
  rotear(rota);
  try { if (location.hash.slice(1) !== rota) history.pushState(null, "", "#" + rota); } catch { /* sem histórico */ }
}

function rotear(rota = rotaAtual) {
  const view = rota.startsWith("produto-") ? "produto" : rota;

  $$("[data-view]").forEach((el) => (el.hidden = el.dataset.view !== view));
  const header = ["inicio", "checkout", "conta"].includes(view) ? "inicio"
    : ["entrar", "cadastro"].includes(view) ? "auth" : "loja";
  $$("[data-header]").forEach((h) => (h.hidden = h.dataset.header !== header));
  document.body.classList.toggle("page-auth", view === "entrar" || view === "cadastro");
  document.body.classList.toggle("page-conta", view === "conta");
  document.body.classList.toggle("page-produto", view === "produto");
  $("#search-pop")?.classList.remove("is-open");
  abrirCarrinho(false);
  abrirMenu(false);
  marcarLinkAtivo("#" + view);
  document.title = "ZeroOnze — Prévia do site";

  if (view === "produtos") paginaProdutos();
  if (view === "produto") paginaProduto(rota.slice("produto-".length));
  if (view === "pedidos") paginaPedidos();
  if (view === "salvos") paginaSalvos();
  if (view === "checkout") Checkout.iniciar();
  if (view === "entrar") { if (Conta.atual()) return irPara("conta"); paginaEntrar(); }
  if (view === "cadastro") paginaCadastro();
  if (view === "conta") paginaConta();
  window.scrollTo(0, 0);
}

function iniciarPaginaUnica() {
  paginaInicial();

  // Todos os links internos (#...) são tratados aqui, sem depender do navegador
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const rota = a.getAttribute("href").slice(1);
    if (!rotaValida(rota)) return;
    e.preventDefault();
    if (a.hasAttribute("data-cat")) { filtro.categoria = a.dataset.cat; filtro.busca = ""; }
    if (a.dataset.aba) { contaAba = a.dataset.aba; contaEditando = false; }
    irPara(rota);
  });

  $$("form.search").forEach((f) =>
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      filtro.busca = $("input", f).value.trim();
      filtro.categoria = "";
      irPara("produtos");
    })
  );

  $("#sort").addEventListener("change", paginaProdutos);

  // Botões voltar/avançar e #hash digitado: só reage a rotas conhecidas
  const seguirHash = () => {
    const h = location.hash.slice(1);
    if (rotaValida(h) && h !== rotaAtual) { rotaAtual = h; rotear(h); }
  };
  window.addEventListener("hashchange", seguirHash);
  window.addEventListener("popstate", seguirHash);

  const inicial = location.hash.slice(1);
  rotaAtual = rotaValida(inicial) ? inicial : "inicio";
  rotear(rotaAtual);
}

/* ---------- Inicialização ---------- */
document.addEventListener("DOMContentLoaded", () => {
  montarMobile();
  montarIcones();
  montarElementosGlobais();
  ativarEventos();
  ativarBuscaSuspensa();
  ativarFiltro();
  atualizarLinksConta();
  SPA ? iniciarPaginaUnica() : iniciarMultipaginas();
  Carrinho.render();
});
