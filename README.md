# ZeroOnze — Não é só anime, é estilo

Loja virtual de camisetas oversized com estampas de anime, feita em **React** com **Vite** e **React Router**. Tem versão para computador e para celular, seguindo os layouts do Figma.

> Seu estilo, suas regras: vista sem pedir permissão.

---

## 1 - Sobre o projeto

O site simula uma loja completa: vitrine, catálogo com busca, filtro e ordenação, página de produto com troca de cor e de foto (frente/costas), carrinho, checkout em etapas, conta do cliente, histórico de pedidos e newsletter.

Por ser um projeto de front-end, **os dados ficam salvos no navegador** (`localStorage`): carrinho, contas, pedidos e produtos salvos. Não há servidor nem pagamento real.

**Tecnologias:** React 19 · React Router 7 · Vite 6 · CSS puro · API ViaCEP

---

## 2 - Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 20 ou mais recente.

```bash
git clone https://github.com/gutsz-ng/zeroonze-geekstrt.git
cd zeroonze-geekstrt
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Roda o site em modo de desenvolvimento |
| `npm run build` | Gera a versão final na pasta `dist/` |
| `npm run preview` | Abre a versão final localmente |
| `npm run build:pages` | Gera a versão para o GitHub Pages |

---

## 3 - Estrutura de pastas

```
├── public/
│   └── img/                  → Logo, banners, fotos das camisas e bandeiras de cartão
├── src/
│   ├── components/
│   │   ├── Header            → Cabeçalho do computador (variantes: início, loja, conta)
│   │   ├── MobileHeader      → Barra do celular, busca e menu lateral ☰
│   │   ├── Footer            → Rodapé
│   │   ├── Logo
│   │   ├── NavLinks          → Menu principal com submenu de categorias
│   │   ├── HeaderIcons       → Busca, conta ("Salve, nome") e carrinho com contador
│   │   ├── SearchBar
│   │   ├── Layout            → Monta cabeçalhos + página + rodapé + carrinho
│   │   ├── Hero              → Banner da página inicial
│   │   ├── Section           → Seção com título e subtítulo
│   │   ├── Benefits          → Frete grátis e parcelamento
│   │   ├── ProductListing    → Grade de produtos
│   │   ├── ProductCard       → Card de produto
│   │   ├── FilterGroup       → Filtro por categoria
│   │   ├── SortSelect        → "Ordenar por"
│   │   ├── ProductDetails    → Galeria + área de compra
│   │   ├── ProductGallery    → Foto grande e miniaturas Costas / Frente
│   │   ├── BuyBox            → Nome, preço, descrição, opções e botões
│   │   ├── ProductOptions    → Tamanho e cor
│   │   ├── CartDrawer        → Carrinho (painel no computador, "Meu Carrinho" no celular)
│   │   ├── CartItem          → Item do carrinho
│   │   ├── Field             → Campo de formulário com erro
│   │   └── Icon              → Ícones SVG
│   ├── pages/
│   │   ├── HomePage          → /
│   │   ├── ProductListingPage→ /produtos  (?busca=, ?categoria=)
│   │   ├── ProductViewPage   → /produto/:id
│   │   ├── CheckoutPage      → /checkout
│   │   ├── LoginPage         → /entrar
│   │   ├── SignupPage        → /cadastro
│   │   ├── ProfilePage       → /conta  (?aba=info | pedidos | pagamentos | salvos)
│   │   ├── OrdersPage        → /pedidos (visitante sem conta)
│   │   ├── SavedPage         → /salvos  (visitante sem conta)
│   │   ├── NewsletterPage    → /newsletter
│   │   ├── PrivacyPage       → /privacidade
│   │   └── NotFoundPage      → qualquer outro endereço
│   ├── context/              → Estado global (Context API)
│   │   ├── CarrinhoContext   → Itens, total, frete, abrir/fechar
│   │   ├── ContaContext      → Cadastro, login, perfil e pedidos
│   │   ├── FavoritosContext  → Produtos salvos
│   │   ├── ToastContext      → Avisos rápidos
│   │   └── AppProviders      → Junta todos os contextos
│   ├── hooks/                → useLocalStorage, useFormulario, useEhCelular, useBodyClass
│   ├── data/
│   │   ├── produtos.js       → Catálogo (16 camisas) e categorias
│   │   └── newsletter.js     → Conteúdo da edição atual da newsletter
│   ├── utils/                → Formatação (R$), máscaras, validações, ViaCEP, status de pedido
│   ├── styles/global.css     → Estilos, componentes e versão mobile
│   ├── App.jsx               → Rotas
│   └── main.jsx              → Ponto de entrada
├── docs/                     → Folha de componentes e newsletter por e-mail (para o Figma)
├── index.html
├── vite.config.js
└── package.json
```

### Adicionar uma camisa nova

Coloque as fotos em `public/img/` e acrescente um item em `src/data/produtos.js`:

```js
{
  id: "nova-camisa",
  nome: "Oversized Nova Camisa",
  preco: 89.90,
  categoria: "naruto",
  cor: "preto",
  img: "nova.jpg",
  imgs:   { preto: "nova.jpg",        branco: "nova-branca.jpg" },
  frente: { preto: "nova-frente.jpg", branco: "nova-branca-frente.jpg" },
  tags: "palavras para a busca",
  descricao: "Texto que aparece na página do produto.",
},
```

---

## 4 - Funcionalidades

- **Início:** banner, Novo Drop (One Piece), Drops em destaque (Dragon Ball), frete grátis acima de R$ 200 e 12x sem juros.
- **Catálogo:** busca por nome, personagem ou anime; filtro por categoria; ordenação por relevância, preço e nome.
- **Produto:** tamanho (P, M, G, GG) e cor; a foto troca com a cor; miniaturas Costas / Frente; Salvar; Comprar agora; produtos relacionados.
- **Carrinho:** painel lateral no computador e cartão "Meu Carrinho" no celular.
- **Checkout:** identificação → entrega (endereço pelo CEP via **API ViaCEP**) → pagamento (cartão em até 12x ou PIX), cupom `ZEROONZE10`.
- **Conta:** cadastro, login por e-mail ou apelido, "Salve, [apelido]" no topo, Meu Perfil com Minhas Informações, Meus Pedidos (com status), Métodos de Pagamento e Produtos Salvos.
- **Newsletter** e **Privacidade & Dados (LGPD)** no rodapé.

### Catálogo — 16 camisas, 5 categorias

| Categoria | Camisas | Preço |
| --- | --- | --- |
| One Piece | Zoro, Luffy, Loki | R$ 89,80 |
| Dragon Ball | Cell Perfect Form, Kakaroto, Freeza, Boo, Vegeta, Gohan | R$ 109,90 |
| Naruto | Itachi, Sharingan Clan | R$ 109,90 |
| Jujutsu Kaisen | Maki Zenin, Rei das Maldições, Sukuna vs Gojo | R$ 89,90 |
| Attack on Titan | Levi Ackerman, Asas da Liberdade | R$ 89,90 |

Todas em preto e branco, com fotos de frente e costas.

---

## 5 - Tipografia

| Fonte | Uso | Pesos |
| --- | --- | --- |
| **Syne** | Títulos, nomes de produto, menus, botões, rodapé, carrinho | 400 a 800 |
| **Urbanist** | Textos, descrições, preços, formulários | 400, 500, 600, 700 |

```css
--font-display: "Syne", "Arial Black", sans-serif;
--font-body: "Urbanist", "Helvetica Neue", Arial, sans-serif;
```

---

## 6 - Cores

### Escala de cinza
- preto `#000000` · grafite `#111111` (fundo principal) · superfície `#1B1B1B` · chumbo `#222222`
- cinza-escuro `#444444` · cinza-médio `#8A8A8A` · cinza-claro `#BDBDBD`
- gelo `#F3F3F3` · off-white `#F9F8FE` · branco `#FFFFFF`

### Destaque e status
- laranja `#FF7A00` — contador do carrinho e etiquetas
- erro `#D93025` · erro claro `#FF6B6B` · sucesso `#18794E`

---

## 7 - Responsividade

| Largura | Layout |
| --- | --- |
| acima de 760 px | Computador: menu no topo, grades de 3 colunas, carrinho lateral |
| até 760 px | Celular: barra branca fixa, menu ☰ lateral, "Meu Carrinho", listas em 2 colunas |

---

## 8 - Publicação

**Netlify** (sem cartão): *Add new project → Import from GitHub*. As configurações já estão no `netlify.toml`.

**GitHub Pages:** em *Settings → Pages*, escolha **Source: GitHub Actions**. O arquivo `.github/workflows/deploy.yml` publica sozinho a cada envio para a `main`, em `https://gutsz-ng.github.io/zeroonze-geekstrt/`.

**Vercel:** importar o repositório. O `vercel.json` já cuida das rotas.

---

## 9 - Limitações e próximos passos

- [ ] Pagamento real (Mercado Pago, Stripe ou PagSeguro)
- [ ] Servidor e banco de dados para contas, pedidos e carrinho
- [ ] Lista da newsletter ligada a um programa de e-mail
- [ ] Login com Google/Facebook e recuperação de senha
- [ ] Preencher o CNPJ em `PrivacyPage.jsx`

---

## 10 - Créditos

Projeto desenvolvido por **José Gustavo de Sousa Nogueira**.
Contato: zeroonze.co@gmail.com

As estampas são da marca ZeroOnze, inspiradas em animes; os personagens pertencem aos seus respectivos autores e estúdios.
