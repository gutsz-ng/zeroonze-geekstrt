import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "./Icon";
import SearchBar from "./SearchBar";
import { img } from "../utils/assets";
import { CATEGORIAS } from "../data/produtos";
import { useCarrinho } from "../context/CarrinhoContext";
import { useConta } from "../context/ContaContext";
import { useToast } from "../context/ToastContext";

const ativo = ({ isActive }) => (isActive ? "is-active" : undefined);

/** Barra branca do celular, busca e menu lateral (☰). */
export default function MobileHeader() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [categoriasAbertas, setCategoriasAbertas] = useState(false);
  const { quantidade, alternar, fechar } = useCarrinho();
  const { conta, nomeDeExibicao, sair } = useConta();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Fecha tudo ao trocar de página
  useEffect(() => {
    setMenuAberto(false);
    setBuscaAberta(false);
  }, [location.pathname, location.search]);

  // Trava a rolagem enquanto o menu está aberto e fecha com Esc
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuAberto);
    const esc = (e) => e.key === "Escape" && setMenuAberto(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [menuAberto]);

  const alternarMenu = () => {
    setMenuAberto((a) => !a);
    setBuscaAberta(false);
    fechar();
  };

  const sairDaConta = () => {
    sair();
    setMenuAberto(false);
    toast("Você saiu da conta.");
    navigate("/");
  };

  return (
    <>
      <div className="mbar">
        <button
          className={`mbar__burger ${menuAberto ? "is-open" : ""}`}
          onClick={alternarMenu}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <span></span><span></span><span></span>
        </button>
        <Link className="mbar__logo" to="/">
          <img src={img("logo.png")} alt="ZeroOnze" />
        </Link>
        <div className="mbar__icons">
          <button className="icon-btn" onClick={() => { setBuscaAberta((a) => !a); setMenuAberto(false); }} aria-label="Buscar">
            <Icon name="busca" />
          </button>
          <Link className="icon-btn" to={conta ? "/conta" : "/entrar"} aria-label="Minha conta">
            <Icon name="conta" />
          </Link>
          <button className="icon-btn" onClick={() => { setMenuAberto(false); alternar(); }} aria-label="Carrinho">
            <Icon name="carrinho" />
            {quantidade > 0 && <span className="cart-count">{quantidade}</span>}
          </button>
        </div>
        <div className={`mbar__search ${buscaAberta ? "is-open" : ""}`}>
          {buscaAberta && <SearchBar placeholder="Procure seu produto" autoFocus onBuscar={() => setBuscaAberta(false)} />}
        </div>
      </div>

      <div className={`moverlay ${menuAberto ? "is-open" : ""}`} onClick={() => setMenuAberto(false)} />

      <nav className={`mmenu ${menuAberto ? "is-open" : ""}`} aria-label="Menu" aria-hidden={!menuAberto}>
        {conta && (
          <div className="mmenu__profile">
            <p className="mmenu__hello display">Salve, {nomeDeExibicao()}</p>
            <div className="mmenu__links">
              <Link to="/conta?aba=info">Minhas Informações</Link>
              <Link to="/conta?aba=pagamentos">Métodos de Pagamento</Link>
              <Link to="/conta?aba=salvos">Produtos Salvos</Link>
              <button className="mmenu__logout" onClick={sairDaConta}>Sair da conta</button>
            </div>
          </div>
        )}

        <p className="mmenu__title display">Páginas</p>
        <div className="mmenu__links">
          <NavLink to="/" end className={ativo}>Home</NavLink>
          <NavLink to="/produtos" className={ativo}>Produtos</NavLink>
          <button className="mmenu__cat" onClick={() => setCategoriasAbertas((a) => !a)} aria-expanded={categoriasAbertas}>
            Categorias <span aria-hidden="true">{categoriasAbertas ? "−" : "+"}</span>
          </button>
          {categoriasAbertas && (
            <div className="mmenu__sub">
              {Object.entries(CATEGORIAS).map(([id, nome]) => (
                <Link key={id} to={`/produtos?categoria=${id}`}>{nome}</Link>
              ))}
            </div>
          )}
          <NavLink to={conta ? "/conta?aba=pedidos" : "/pedidos"} className={ativo}>Meus Pedidos</NavLink>
        </div>

        {!conta && (
          <div className="mmenu__foot">
            <Link className="mmenu__btn display" to="/entrar">Entrar</Link>
            <Link className="mmenu__signup" to="/cadastro">Faça seu cadastro</Link>
          </div>
        )}
      </nav>
    </>
  );
}
