import { Link } from "react-router-dom";
import Icon from "./Icon";
import { fotoFrente } from "../data/produtos";
import { brl } from "../utils/format";
import { img } from "../utils/assets";

/** Card de uma camisa: foto (mostra a frente ao passar o mouse), nome e preço. */
export default function ProductCard({ produto, children }) {
  const link = `/produto/${produto.id}`;
  const frente = fotoFrente(produto, produto.cor);

  return (
    <article className="card">
      <div className="card__media">
        <Link className="card__link" to={link} aria-label={produto.nome}>
          <img src={img(produto.img)} alt={`Camiseta ${produto.nome}`} loading="lazy" />
          {frente && <img className="card__alt" src={img(frente)} alt="" loading="lazy" />}
        </Link>
        <Link className="card__add" to={link}>Ver detalhes</Link>
      </div>
      <h3 className="card__name display">
        <Link to={link}>{produto.nome}</Link>
      </h3>
      <p className="card__price">
        {brl(produto.preco)}
        <Link className="card__cart" to={link} aria-label={`Comprar ${produto.nome}`}>
          <Icon name="carrinho" />
        </Link>
      </p>
      {children}
    </article>
  );
}
