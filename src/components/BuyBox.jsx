import { useState } from "react";
import Icon from "./Icon";
import ProductOptions from "./ProductOptions";
import { brl } from "../utils/format";
import { useCarrinho } from "../context/CarrinhoContext";
import { useFavoritos } from "../context/FavoritosContext";

/** Nome, preço, descrição, opções e botões de compra. */
export default function BuyBox({ produto, cor, onCor }) {
  const [tamanho, setTamanho] = useState(null);
  const [erro, setErro] = useState("");
  const { adicionar, abrir } = useCarrinho();
  const { tem, alternar } = useFavoritos();
  const salvo = tem(produto.id);

  const adicionarAoCarrinho = () => {
    if (!tamanho) {
      setErro("Selecione um tamanho.");
      return false;
    }
    setErro("");
    adicionar(produto.id, tamanho, cor);
    return true;
  };

  return (
    <div className="product__info">
      <h1 className="product__title display">{produto.nome}</h1>
      <p className="product__price">{brl(produto.preco)}</p>

      <div className="product__about">
        <h2 className="product__label display">Descrição:</h2>
        <p className="product__desc">{produto.descricao}</p>
      </div>

      <ProductOptions
        tamanho={tamanho}
        cor={cor}
        onTamanho={(t) => { setTamanho(t); setErro(""); }}
        onCor={onCor}
      />

      <p className="product__error" aria-live="polite">{erro}</p>

      <button className="btn-add" onClick={adicionarAoCarrinho}>
        <Icon name="carrinho" />
        Adicionar ao carrinho
      </button>
      <div className="product__actions">
        <button className={`btn-outline ${salvo ? "is-active" : ""}`} onClick={() => alternar(produto.id)}>
          {salvo ? "Salvo ✓" : "Salvar"}
        </button>
        <button className="btn-outline" onClick={() => adicionarAoCarrinho() && abrir()}>Comprar agora</button>
      </div>
    </div>
  );
}
