import { buscarProduto, CORES, fotoCostas } from "../data/produtos";
import { chaveItem, useCarrinho } from "../context/CarrinhoContext";
import { brl } from "../utils/format";
import { img } from "../utils/assets";

/** Linha do carrinho com quantidade e remover. Usada no painel e no checkout. */
export default function CartItem({ item, variante = "drawer" }) {
  const { alterar, remover } = useCarrinho();
  const p = buscarProduto(item.id);
  const chave = chaveItem(item);
  const foto = img(fotoCostas(p, item.cor));

  const quantidade = (
    <div className="qty">
      <button onClick={() => alterar(chave, -1)} aria-label="Diminuir">−</button>
      <span>{item.qtd}</span>
      <button onClick={() => alterar(chave, 1)} aria-label="Aumentar">+</button>
      {variante === "resumo" && (
        <button className="sum-item__remove" onClick={() => remover(chave)}>remover</button>
      )}
    </div>
  );

  if (variante === "resumo") {
    return (
      <div className="sum-item">
        <img src={foto} alt="" />
        <div>
          <b>{p.nome}</b>
          <p>Tamanho: {item.tamanho} · {CORES[item.cor]}</p>
          <p>{brl(p.preco)}</p>
          {quantidade}
        </div>
      </div>
    );
  }

  return (
    <div className="cart-item">
      <img src={foto} alt="" />
      <div>
        <h4>{p.nome}</h4>
        <small>{item.tamanho} · {CORES[item.cor]} · {brl(p.preco)}</small>
        {quantidade}
      </div>
      <button className="cart-item__remove" onClick={() => remover(chave)}>Remover</button>
    </div>
  );
}
