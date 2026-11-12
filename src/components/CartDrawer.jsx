import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { FRETE_GRATIS_A_PARTIR, chaveItem, useCarrinho } from "../context/CarrinhoContext";
import { buscarProduto, CORES, fotoCostas } from "../data/produtos";
import { brl } from "../utils/format";
import { img } from "../utils/assets";
import { useEhCelular } from "../hooks/useEhCelular";
import { useToast } from "../context/ToastContext";

/**
 * Carrinho: painel lateral no computador e cartão "Meu Carrinho" no celular.
 */
export default function CartDrawer() {
  const { itens, subtotal, aberto, fechar, esvaziar } = useCarrinho();
  const celular = useEhCelular();
  const navigate = useNavigate();
  const toast = useToast();

  const irParaCheckout = () => {
    fechar();
    navigate("/checkout");
  };

  const faltaFrete = FRETE_GRATIS_A_PARTIR - subtotal;
  const nota = faltaFrete <= 0
    ? "Você ganhou frete grátis! Parcele em até 12x."
    : `Faltam ${brl(faltaFrete)} para frete grátis. Parcele em até 12x.`;

  return (
    <>
      <div className={`overlay ${aberto ? "is-open" : ""} ${celular ? "is-light" : ""}`} onClick={fechar} />

      {/* Computador: painel lateral */}
      <aside className={`drawer ${aberto && !celular ? "is-open" : ""}`} aria-label="Carrinho">
        <div className="drawer__head">
          <h2 className="display">Carrinho</h2>
          <button className="drawer__close" onClick={fechar} aria-label="Fechar">&times;</button>
        </div>
        <div className="drawer__body">
          {itens.length === 0
            ? <p style={{ padding: "40px 0", textAlign: "center", color: "#999" }}>Seu carrinho está vazio.</p>
            : itens.map((i) => <CartItem key={chaveItem(i)} item={i} />)}
        </div>
        <div className="drawer__foot">
          <div className="drawer__total"><span>Total</span><strong>{brl(subtotal)}</strong></div>
          <p className="drawer__note">{nota}</p>
          <button className="btn btn--block" onClick={irParaCheckout} disabled={!itens.length}>Finalizar compra</button>
        </div>
      </aside>

      {/* Celular: cartão "Meu Carrinho" */}
      <div className={`mcart ${aberto && celular ? "is-open" : ""}`} role="dialog" aria-label="Meu carrinho">
        <h2 className="mcart__title display">Meu Carrinho</h2>
        <div className="mcart__items">
          {itens.length === 0 ? (
            <p className="mcart__empty">Seu carrinho está vazio.</p>
          ) : (
            itens.map((i) => {
              const p = buscarProduto(i.id);
              return (
                <div className="mcart__item" key={chaveItem(i)}>
                  <img src={img(fotoCostas(p, i.cor))} alt="" />
                  <div>
                    <h3 className="display">{p.nome}</h3>
                    <p className="mcart__price display">{brl(p.preco * i.qtd)}</p>
                    <p className="mcart__meta">
                      Tam. {i.tamanho} · {CORES[i.cor]}{i.qtd > 1 ? ` · ${i.qtd} unidades` : ""}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="mcart__total display"><span>Valor total:</span><strong>{brl(subtotal)}</strong></div>
        <div className="mcart__actions">
          <button
            className="mcart__clear display"
            style={{ visibility: itens.length ? "visible" : "hidden" }}
            onClick={() => { esvaziar(); toast("Carrinho esvaziado"); }}
          >
            Esvaziar
          </button>
          <button className="mcart__go display" onClick={irParaCheckout} disabled={!itens.length}>Ver Carrinho</button>
        </div>
      </div>
    </>
  );
}
