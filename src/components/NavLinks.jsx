import { Link, NavLink } from "react-router-dom";
import { CATEGORIAS } from "../data/produtos";
import { useConta } from "../context/ContaContext";

const ativo = ({ isActive }) => (isActive ? "is-active" : undefined);

/** Menu principal: Início, Produtos, Categorias (com submenu) e Meus pedidos. */
export default function NavLinks({ label = "Principal" }) {
  const { conta } = useConta();
  return (
    <nav className="nav" aria-label={label}>
      <NavLink to="/" end className={ativo}>Início</NavLink>
      <NavLink to="/produtos" className={ativo}>Produtos</NavLink>
      <div className="dropdown">
        <Link to="/produtos">Categorias</Link>
        <div className="dropdown__menu">
          {Object.entries(CATEGORIAS).map(([id, nome]) => (
            <Link key={id} to={`/produtos?categoria=${id}`}>{nome}</Link>
          ))}
        </div>
      </div>
      <NavLink to={conta ? "/conta?aba=pedidos" : "/pedidos"} className={ativo}>Meus pedidos</NavLink>
    </nav>
  );
}
