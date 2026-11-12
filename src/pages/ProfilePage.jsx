import { useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import Field from "../components/Field";
import ProductCard from "../components/ProductCard";
import { useConta } from "../context/ContaContext";
import { useFavoritos } from "../context/FavoritosContext";
import { useToast } from "../context/ToastContext";
import { useBodyClass } from "../hooks/useBodyClass";
import { useFormulario } from "../hooks/useFormulario";
import { buscarProduto, CORES, fotoCostas } from "../data/produtos";
import { brl } from "../utils/format";
import { img } from "../utils/assets";
import { validar } from "../utils/validacao";
import { statusPedido } from "../utils/pedidos";

const ABAS = [
  ["pedidos", "Meus Pedidos"],
  ["info", "Minhas Informações"],
  ["pagamentos", "Métodos de Pagamento"],
  ["salvos", "Produtos Salvos"],
];

/** Meu Perfil: menu à esquerda e o conteúdo da aba escolhida (?aba=). */
export default function ProfilePage() {
  useBodyClass("page-conta");
  const { conta, sair } = useConta();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();
  const aba = ABAS.some(([id]) => id === params.get("aba")) ? params.get("aba") : "info";

  if (!conta) return <Navigate to="/entrar" replace />;

  const sairDaConta = () => {
    sair();
    toast("Você saiu da conta.");
    navigate("/");
  };

  return (
    <Layout header="inicio">
      <main className="profile">
        <div className="profile__inner">
          <nav className="profile-menu" aria-label="Meu perfil">
            <p className="profile-menu__title display">Meu Perfil</p>
            {ABAS.map(([id, nome]) => (
              <button
                key={id}
                className={`profile-menu__item ${aba === id ? "is-active" : ""}`}
                onClick={() => setParams({ aba: id })}
              >
                {nome}
              </button>
            ))}
            <button className="profile-menu__item profile-menu__item--sair" onClick={sairDaConta}>Sair da conta</button>
          </nav>

          <section className="profile-panel" aria-live="polite">
            {aba === "info" && <MinhasInformacoes key={conta.email} />}
            {aba === "pedidos" && <MeusPedidos />}
            {aba === "pagamentos" && <MetodosPagamento />}
            {aba === "salvos" && <ProdutosSalvos />}
          </section>
        </div>
      </main>
    </Layout>
  );
}

function Cabecalho({ titulo, children }) {
  return (
    <div className="profile-panel__head">
      <h1 className="display">{titulo}</h1>
      {children}
    </div>
  );
}

const Linha = ({ rotulo, valor }) => (
  <p className="info-row"><span>{rotulo}:</span> {valor || "—"}</p>
);

/* ---------- Minhas Informações ---------- */
function MinhasInformacoes() {
  const { conta, atualizar } = useConta();
  const toast = useToast();
  const [editando, setEditando] = useState(false);
  const { valores, campo, erros, setErros } = useFormulario(
    { ...conta },
    { cpf: "cpf", celular: "celular", cep: "cep" }
  );

  if (!editando) {
    const endereco = `${conta.endereco}, ${conta.numero}${conta.complemento ? " — " + conta.complemento : ""}`;
    return (
      <>
        <Cabecalho titulo="Minhas Informações">
          <button className="profile-panel__link" onClick={() => setEditando(true)}>Quer mudar alguma informação?</button>
        </Cabecalho>
        <h2 className="profile-panel__sub display">Informações Pessoais</h2>
        <Linha rotulo="Nome" valor={conta.nome} />
        <Linha rotulo="Como prefere ser chamado" valor={conta.apelido} />
        <Linha rotulo="CPF" valor={conta.cpf} />
        <Linha rotulo="Email" valor={conta.email} />
        <Linha rotulo="Celular" valor={conta.celular} />
        <hr className="profile-panel__hr" />
        <h2 className="profile-panel__sub display">Informações de Entrega</h2>
        <Linha rotulo="Endereço" valor={endereco} />
        <Linha rotulo="Bairro" valor={conta.bairro} />
        <Linha rotulo="Cidade" valor={conta.cidade} />
        <Linha rotulo="CEP" valor={conta.cep} />
        <button className="profile-panel__link profile-panel__link--bottom" onClick={() => setEditando(true)}>
          Quer editar algum dado?
        </button>
      </>
    );
  }

  const salvar = (e) => {
    e.preventDefault();
    const e2 = validar(valores, ["nome", "cpf", "celular", "cep", "endereco", "numero", "bairro", "cidade"]);
    setErros(e2);
    if (Object.keys(e2).length) return;
    const { nome, apelido, cpf, celular, cep, endereco, numero, bairro, cidade, complemento } = valores;
    atualizar({ nome, apelido, cpf, celular, cep, endereco, numero, bairro, cidade, complemento });
    setEditando(false);
    toast("Informações atualizadas");
  };

  const f = (nome, rotulo, extra = {}) => (
    <Field estilo="conta" label={rotulo} erro={erros[nome]} {...extra} {...campo(nome)} />
  );

  return (
    <>
      <Cabecalho titulo="Editar informações" />
      <form className="info-form" onSubmit={salvar} noValidate>
        <h2 className="profile-panel__sub display">Informações Pessoais</h2>
        {f("nome", "Nome Completo *")}
        {f("apelido", "Como prefere ser chamado?")}
        {f("cpf", "CPF *", { inputMode: "numeric" })}
        {f("celular", "Celular *", { inputMode: "numeric" })}
        <p className="info-form__note">O e-mail ({conta.email}) é seu login e não pode ser trocado aqui.</p>
        <h2 className="profile-panel__sub display">Informações de Entrega</h2>
        {f("cep", "CEP *", { inputMode: "numeric" })}
        {f("endereco", "Endereço *")}
        {f("numero", "Número *", { inputMode: "numeric" })}
        {f("bairro", "Bairro *")}
        {f("cidade", "Cidade *")}
        {f("complemento", "Complemento")}
        <div className="info-form__actions">
          <button type="button" className="auth-btn auth-btn--ghost display" onClick={() => setEditando(false)}>Cancelar</button>
          <button type="submit" className="auth-btn display">Salvar</button>
        </div>
      </form>
    </>
  );
}

/* ---------- Meus Pedidos ---------- */
function MeusPedidos() {
  const { pedidos } = useConta();
  const total = pedidos.length;

  return (
    <>
      <Cabecalho titulo="Meus Pedidos"><span className="porders__status-h">STATUS</span></Cabecalho>
      {total === 0 ? (
        <p className="profile-empty">Você ainda não fez nenhum pedido. <Link to="/produtos">Ver produtos</Link></p>
      ) : (
        <div className="porders">
          {pedidos.map((pedido, idx) => {
            const st = statusPedido(pedido);
            const numero = String(total - idx).padStart(2, "0"); // o mais antigo é o 01
            return (
              <div className="porders__group" key={pedido.numero + "-" + idx}>
                {pedido.itens.map((item, j) => {
                  const p = buscarProduto(item.id);
                  const nome = item.produto
                    ? `${item.produto} - ${item.tamanho} - ${CORES[item.cor] === "Branco" ? "Branca" : "Preta"}`
                    : item.nome;
                  return (
                    <div className="porders__row" key={j}>
                      {p ? (
                        <Link className="porders__thumb" to={`/produto/${p.id}`}><img src={img(fotoCostas(p, item.cor))} alt="" /></Link>
                      ) : (
                        <div className="porders__thumb" />
                      )}
                      <div className="porders__info">
                        <p className="porders__num">Pedido nº {numero}{item.qtd > 1 ? ` · ${item.qtd} unidades` : ""}</p>
                        <p className="porders__name display">{nome}</p>
                        <p className="porders__meta">{new Date(pedido.data).toLocaleDateString("pt-BR")} · {brl(item.preco * item.qtd)}</p>
                      </div>
                      <p className="porders__status-wrap">
                        <span className="porders__status-lbl display">STATUS</span>
                        <span className={`porders__status porders__status--${st.tipo} display`}>{st.texto}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

/* ---------- Métodos de Pagamento ---------- */
function MetodosPagamento() {
  const { pedidos } = useConta();
  const usados = [...new Set(pedidos.map((p) => (p.pagamento || "").split(" em ")[0]).filter(Boolean))];
  return (
    <>
      <Cabecalho titulo="Métodos de Pagamento" />
      {usados.length
        ? usados.map((m) => <Linha key={m} rotulo="Usado" valor={m} />)
        : <p className="profile-empty">Nenhum pagamento feito ainda.</p>}
      <p className="info-form__note">Por segurança, o site guarda só os 4 últimos dígitos do cartão. O número completo é digitado a cada compra.</p>
    </>
  );
}

/* ---------- Produtos Salvos ---------- */
function ProdutosSalvos() {
  const { ids, alternar } = useFavoritos();
  const salvos = [...ids].reverse().map(buscarProduto).filter(Boolean);
  return (
    <>
      <Cabecalho titulo="Produtos Salvos" />
      {salvos.length === 0 ? (
        <p className="profile-empty">Nenhuma camisa salva. Na página de um produto, clique em <b>Salvar</b>. <Link to="/produtos">Ver produtos</Link></p>
      ) : (
        <div className="profile-saved">
          {salvos.map((p) => (
            <ProductCard key={p.id} produto={p}>
              <button className="card__unsave" onClick={() => alternar(p.id)}>Remover dos salvos</button>
            </ProductCard>
          ))}
        </div>
      )}
    </>
  );
}
