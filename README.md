# ZeroOnze Geek Streetwear — Não é só anime, é estilo

Loja virtual de camisetas oversized com estampas de anime. Projeto front-end, com versão para computador e celular.

> Seu estilo, suas regras: vista sem pedir permissão.

---

## 1 - Sobre o projeto

O site simula uma loja completa: vitrine, catálogo com busca e filtros, página de produto com troca de cor e de foto (frente/costas), carrinho, checkout em etapas, conta do cliente, histórico de pedidos e newsletter.

Por ser um protótipo de front-end, **os dados ficam salvos no navegador** (`localStorage`): carrinho, contas, pedidos, produtos salvos. Não há servidor nem pagamento real.

---

## 2 - Como rodar

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/gutsz-ng/zeroonze-geekstrt.git
   ```
2. Abra a pasta no **VS Code**.
3. Clique com o botão direito em `index.html` → **Open with Live Server** (extensão Live Server).
   Também funciona com dois cliques no `index.html`.

Não há nada para instalar.

---

## 3 - Estrutura de pastas

Cada página do site é um arquivo `.html` na raiz. O estilo fica num único CSS e toda a lógica num único JavaScript, compartilhados por todas as páginas.

```
zeroonze-geekstrt/
├── index.html            → Página inicial (banner, Novo Drop, Drops em destaque)
├── produtos.html         → Catálogo / resultados de busca, filtro e ordenação
├── produto.html          → Detalhes do produto (?id=zoro)
├── checkout.html         → Espaço de compra (identificação, entrega, pagamento)
├── entrar.html           → Acessar conta
├── cadastro.html         → Criar conta
├── conta.html            → Meu Perfil (informações, pedidos, pagamentos, salvos)
├── pedidos.html          → Meus pedidos (visitante sem conta)
├── favoritos.html        → Produtos salvos (visitante sem conta)
├── newsletter.html       → Edição atual da newsletter "Giro Anime"
├── privacidade.html      → Privacidade & Dados (LGPD)
│
├── css/
│   └── style.css         → Estilos globais, componentes e versão mobile
├── js/
│   └── main.js           → Catálogo, carrinho, checkout, conta, busca e rotas
├── assets/
│   └── img/              → Logo, banners, fotos das camisas, bandeiras de cartão
│
└── docs/
    ├── design/
    │   └── componentes.html   → Folha de componentes (para importar no Figma)
    └── newsletter/
        ├── email.html         → Newsletter pronta para programa de e-mail
        ├── desktop.html       → Versão para navegador / Figma
        └── imagens/           → Imagens usadas na newsletter
```

### Organização do `js/main.js`

| Bloco | O que faz |
| --- | --- |
| `PRODUTOS` | Catálogo: nome, preço, categoria, descrição e fotos por cor (costas e frente) |
| `Carrinho` | Adicionar, alterar quantidade, remover, total e frete |
| `Favoritos` | Produtos salvos |
| `Conta` | Criar conta, entrar, sair, editar dados (senha guardada como resumo SHA-256) |
| `Checkout` | Etapas, máscaras (CPF, CEP, celular, cartão), validação e cupom |
| `paginaInicial`, `paginaProdutos`, `paginaProduto`, `paginaConta` … | Montam cada página |
| `montarMobile` | Barra branca, menu lateral ☰ e busca do celular |

### Adicionar uma camisa nova

Coloque as fotos em `assets/img/` e acrescente um item em `PRODUTOS` no `js/main.js`:

```js
{
  id: "nova-camisa", nome: "Oversized Nova Camisa", preco: 89.90,
  img: "assets/img/nova.jpg",
  imgs:   { preto: "assets/img/nova.jpg",        branco: "assets/img/nova-branca.jpg" },
  frente: { preto: "assets/img/nova-frente.jpg", branco: "assets/img/nova-branca-frente.jpg" },
  categoria: "naruto", cor: "preto",
  tags: "palavras para a busca",
  descricao: "Texto que aparece na página do produto.",
},
```

---

## 4 - Páginas e funcionalidades

- **Início:** banner, Novo Drop (One Piece), Drops em destaque (Dragon Ball), benefícios (frete grátis acima de R$ 200 e 12x sem juros).
- **Catálogo:** busca por nome, personagem ou anime; filtro por categoria; ordenação por relevância, preço e nome.
- **Produto:** escolha de tamanho (P, M, G, GG) e cor; a foto troca com a cor; miniaturas **Costas / Frente**; Salvar; Comprar agora; produtos relacionados.
- **Carrinho:** painel lateral no computador e cartão "Meu Carrinho" no celular.
- **Checkout:** identificação → entrega (endereço pelo CEP via ViaCEP) → pagamento (cartão em até 12x ou PIX), cupom `ZEROONZE10`.
- **Conta:** criar conta, entrar com e-mail ou apelido, "Salve, [apelido]" no topo, Meu Perfil com Minhas Informações, Meus Pedidos (com status), Métodos de Pagamento e Produtos Salvos.
- **Newsletter:** link no rodapé com a edição atual; quem marca a opção no cadastro recebe por e-mail.
- **Privacidade & Dados:** política de privacidade conforme a LGPD.

### Catálogo atual — 16 camisas, 5 categorias

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
| **Urbanist** | Textos corridos, descrições, preços, formulários | 400, 500, 600, 700 |

Ambas do [Google Fonts](https://fonts.google.com). No CSS:

```css
--font-display: "Syne", "Arial Black", sans-serif;
--font-body: "Urbanist", "Helvetica Neue", Arial, sans-serif;
```

Use a classe `.display` para colocar um texto em Syne.

---

## 6 - Cores

### Escala de cinza
- preto `#000000` — fundo da página do produto
- grafite `#111111` — fundo principal do site
- superfície `#1B1B1B` — carrinho lateral, menus suspensos
- chumbo `#222222` — botões escuros do celular
- cinza-escuro `#444444` — texto secundário sobre branco
- cinza-médio `#8A8A8A` — bordas de campos
- cinza-claro `#BDBDBD` — texto secundário sobre escuro
- gelo `#F3F3F3` — campo de busca
- off-white `#F9F8FE` — botões claros
- branco `#FFFFFF` — texto principal, barra e menu do celular

### Destaque e status
- laranja `#FF7A00` — contador do carrinho e etiquetas da newsletter
- erro `#D93025`
- erro claro `#FF6B6B` — erro sobre fundo escuro
- sucesso `#18794E`

---

## 7 - Responsividade

| Largura | Layout |
| --- | --- |
| acima de 760 px | Computador: menu no topo, grids de 3 colunas, carrinho lateral |
| até 760 px | Celular: barra branca fixa, menu ☰ lateral, cartão "Meu Carrinho", listas em 2 colunas |

---

## 8 - Publicar no GitHub Pages

1. Suba o repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Branch**, escolha `main` e a pasta `/ (root)`. Salve.
4. Em alguns minutos o site fica no ar em `https://gutsz-ng.github.io/zeroonze-geekstrt/`.

---

## 9 - Limitações e próximos passos

Este é um projeto de front-end. Para virar uma loja real, falta:

- [ ] Pagamento real (Mercado Pago, Stripe ou PagSeguro)
- [ ] Servidor e banco de dados para contas, pedidos e carrinho
- [ ] Lista da newsletter ligada a um programa de e-mail
- [ ] Login com Google/Facebook e recuperação de senha
- [ ] Status de pedido vindo da transportadora
- [ ] Preencher o CNPJ em `privacidade.html`

---

## 10 - Créditos

Projeto desenvolvido por **Gustavo Nogueira**.
Contato: gutsz.ng@gmail.com

As estampas são obras da marca By Zero Onze inspiradas em animes; os personagens pertencem aos seus respectivos autores e estúdios.
