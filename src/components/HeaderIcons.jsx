import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useCarrinho } from "../context/CarrinhoContext";
import { useConta } from "../context/ContaContext";

/** Ícones do topo: (busca), conta com "Salve, nome" e carrinho com contador. */
export default function HeaderIcons({ onBusca, mostrarSaudacao = true }) {
  const { quantidade, alternar } = useCarrinho();
  const { conta, nomeDeExibicao } = useConta();

  return (
    <div className="header__icons">
      {onBusca && (
        <button className="icon-btn" onClick={onBusca} aria-label="Buscar">
          <Icon name="busca" />
        </button>
      )}
      <Link
        className="icon-btn account-link"
        to={conta ? "/conta" : "/entrar"}
        aria-label={conta ? "Meu perfil" : "Entrar na conta"}
        title={conta ? "Meu perfil" : "Entrar na conta"}
      >
        <Icon name="conta" />
        {mostrarSaudacao && conta && <span className="account-hello">Salve, {nomeDeExibicao()}</span>}
      </Link>
      <button className="icon-btn" onClick={alternar} aria-label="Carrinho">
        <Icon name="carrinho" />
        {quantidade > 0 && <span className="cart-count">{quantidade}</span>}
      </button>
    </div>
  );
}
