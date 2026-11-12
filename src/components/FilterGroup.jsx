import { Link } from "react-router-dom";
import { CATEGORIAS } from "../data/produtos";

/** Chips de categoria (abertos pelo botão do funil). */
export default function FilterGroup({ categoriaAtiva, aberto, onEscolher }) {
  if (!aberto) return null;
  const opcoes = [["", "Todas"], ...Object.entries(CATEGORIAS)];
  return (
    <div className="filter-panel" id="filtro-painel">
      {opcoes.map(([id, nome]) => (
        <Link
          key={id || "todas"}
          className={`chip ${categoriaAtiva === id ? "is-active" : ""}`}
          to={id ? `/produtos?categoria=${id}` : "/produtos"}
          onClick={onEscolher}
        >
          {nome}
        </Link>
      ))}
    </div>
  );
}
