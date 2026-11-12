import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Field from "../components/Field";
import CartItem from "../components/CartItem";
import { useCarrinho, chaveItem, FRETE, FRETE_GRATIS_A_PARTIR } from "../context/CarrinhoContext";
import { useConta } from "../context/ContaContext";
import { useFormulario } from "../hooks/useFormulario";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { brl, soDigitos } from "../utils/format";
import { buscarCep, validar } from "../utils/validacao";
import { img } from "../utils/assets";

const CUPONS = { ZEROONZE10: 0.1 }; // código: percentual de desconto
const BANDEIRAS = [["amex", "American Express"], ["visa", "Visa"], ["mastercard", "Mastercard"], ["elo", "Elo"], ["hipercard", "Hipercard"]];

/** Espaço de compra: identificação → entrega → pagamento, com resumo ao lado. */
export default function CheckoutPage() {
  const navigate = useNavigate();
  const { itens, subtotal, esvaziar, paraPedido } = useCarrinho();
  const { conta, criarPedido } = useConta();

  const [dados, setDados] = useLocalStorage("zo_checkout", {});
  const [editando, setEditando] = useState({ id: false, entrega: false });
  const [cupom, setCupom] = useState({ texto: "", aplicado: null, msg: "", ok: false });
  const [metodo, setMetodo] = useState("");
  const [erroPagamento, setErroPagamento] = useState("");

  const formId = useFormulario(
    dados.id || (conta ? { nome: conta.nome, email: conta.email, cpf: conta.cpf, celular: conta.celular } : {}),
    { cpf: "cpf", celular: "celular" }
  );
  const formEntrega = useFormulario(
    dados.entrega || (conta ? { cep: conta.cep, endereco: conta.endereco, numero: conta.numero, bairro: conta.bairro, complemento: conta.complemento, destinatario: conta.nome } : {}),
    { cep: "cep" }
  );
  const formPag = useFormulario({ parcelas: "1" }, { cartao: "cartao", validade: "validade" });

  // Valores do pedido
  const desconto = cupom.aplicado ? subtotal * CUPONS[cupom.aplicado] : 0;
  const base = subtotal - desconto;
  const frete = !subtotal || base >= FRETE_GRATIS_A_PARTIR ? 0 : FRETE;
  const total = base + frete;

  // Endereço automático pelo CEP
  const cep = formEntrega.valores.cep || "";
  useEffect(() => {
    if (soDigitos(cep).length !== 8) return;
    let ativo = true;
    buscarCep(cep).then((d) => {
      if (!ativo || !d) return;
      formEntrega.setValores((v) => ({
        ...v,
        endereco: v.endereco || `${d.logradouro}${d.localidade ? ` — ${d.localidade}/${d.uf}` : ""}`,
        bairro: v.bairro || d.bairro,
      }));
    });
    return () => { ativo = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);

  const idPronto = !!dados.id && !editando.id;
  const entregaPronta = !!dados.entrega && !editando.entrega;

  const salvarIdentificacao = (e) => {
    e.preventDefault();
    const erros = validar(formId.valores, ["nome", "email", "cpf", "celular"]);
    formId.setErros(erros);
    if (Object.keys(erros).length) return;
    setDados((d) => ({ ...d, id: formId.valores }));
    if (!formEntrega.valores.destinatario) formEntrega.preencher({ destinatario: formId.valores.nome });
    setEditando((x) => ({ ...x, id: false }));
  };

  const salvarEntrega = (e) => {
    e.preventDefault();
    const erros = validar(formEntrega.valores, ["cep", "endereco", "numero", "bairro", "destinatario"]);
    formEntrega.setErros(erros);
    if (Object.keys(erros).length) return;
    setDados((d) => ({ ...d, entrega: formEntrega.valores }));
    setEditando((x) => ({ ...x, entrega: false }));
  };

  const aplicarCupom = () => {
    const cod = cupom.texto.trim().toUpperCase();
    if (CUPONS[cod]) {
      setCupom({ texto: cupom.texto, aplicado: cod, ok: true, msg: `Cupom ${cod} aplicado: ${CUPONS[cod] * 100}% de desconto.` });
    } else {
      setCupom({ texto: cupom.texto, aplicado: null, ok: false, msg: "Cupom inválido." });
    }
  };

  const finalizar = (e) => {
    e.preventDefault();
    if (!metodo) return setErroPagamento("Escolha uma forma de pagamento.");
    setErroPagamento("");
    if (metodo === "cartao") {
      const erros = validar(formPag.valores, ["cartao", "titular", "validade", "cvv"]);
      formPag.setErros(erros);
      if (Object.keys(erros).length) return;
    }
    const ent = dados.entrega;
    const parcelas = +formPag.valores.parcelas;
    criarPedido({
      itens: paraPedido(),
      total, frete, desconto,
      entrega: `${ent.endereco}, ${ent.numero} — ${ent.bairro}, CEP ${ent.cep}`,
      // Por segurança, só os 4 últimos dígitos do cartão são guardados
      pagamento: metodo === "pix"
        ? "PIX"
        : `Cartão final ${soDigitos(formPag.valores.cartao).slice(-4)} em ${parcelas}x de ${brl(total / parcelas)}`,
      status: metodo === "pix" ? "Aguardando pagamento PIX" : "Pagamento aprovado",
    });
    esvaziar();
    navigate(conta ? "/conta?aba=pedidos" : "/pedidos");
  };

  const { campo: cId, erros: eId } = formId;
  const { campo: cEnt, erros: eEnt } = formEntrega;
  const { campo: cPag, erros: ePag } = formPag;
  const ent = dados.entrega;

  return (
    <Layout header="inicio">
      <main>
        <div className="checkout">
          {/* ===== Coluna 1: identificação + entrega ===== */}
          <div className="checkout__col">
            <section className={`panel ${idPronto ? "is-done" : ""}`}>
              <h1 className="panel__title">Identificação</h1>
              {idPronto && (
                <div className="panel__done">
                  {dados.id.nome}<br />{dados.id.email}<br />{dados.id.celular}<br />
                  <button className="panel__edit" onClick={() => setEditando((x) => ({ ...x, id: true }))}>Alterar</button>
                </div>
              )}
              <form className="panel__form" onSubmit={salvarIdentificacao} noValidate>
                <p className="panel__text">Utilizaremos seu e-mail para: Identificar seu perfil, histórico de compra, notificação de pedidos e carrinho de compras.</p>
                <Field label="Nome Completo:" erro={eId.nome} autoComplete="name" {...cId("nome")} />
                <Field label="Email:" erro={eId.email} type="email" autoComplete="email" {...cId("email")} />
                <Field label="CPF:" erro={eId.cpf} className="field--short" inputMode="numeric" {...cId("cpf")} />
                <Field label="Celular/WhatsApp" erro={eId.celular} type="tel" inputMode="numeric" autoComplete="tel" {...cId("celular")} />
                <button className="btn-dark" type="submit">Ir para entrega</button>
              </form>
            </section>

            <section className={`panel ${!dados.id ? "is-locked" : ""} ${entregaPronta ? "is-done" : ""}`}>
              <h2 className="panel__title">Entrega</h2>
              {entregaPronta && (
                <div className="panel__done">
                  {ent.endereco}, {ent.numero}{ent.complemento ? ` — ${ent.complemento}` : ""}<br />
                  {ent.bairro} · CEP {ent.cep}<br />Para: {ent.destinatario}<br />
                  <button className="panel__edit" onClick={() => setEditando((x) => ({ ...x, entrega: true }))}>Alterar</button>
                </div>
              )}
              <form className="panel__form" onSubmit={salvarEntrega} noValidate>
                <p className="panel__sub">Cadastre ou selecione um endereço</p>
                <Field label="CEP" erro={eEnt.cep} className="field--short" inputMode="numeric" autoComplete="postal-code" {...cEnt("cep")} />
                <Field label="Endereço:" erro={eEnt.endereco} autoComplete="address-line1" {...cEnt("endereco")} />
                <div className="row">
                  <Field label="Número:" erro={eEnt.numero} className="field--xs" inputMode="numeric" {...cEnt("numero")} />
                  <Field label="Bairro:" erro={eEnt.bairro} {...cEnt("bairro")} />
                </div>
                <Field label={<>Complemento <small>(opcional)</small></>} autoComplete="address-line2" {...cEnt("complemento")} />
                <Field label="Destinatário" erro={eEnt.destinatario} {...cEnt("destinatario")} />
                <button className="btn-dark" type="submit">Continuar</button>
              </form>
            </section>
          </div>

          {/* ===== Coluna 2: pagamento ===== */}
          <section className={`panel panel--pay checkout__pay ${!idPronto || !entregaPronta ? "is-locked" : ""}`}>
            <h2 className="panel__title">Pagamento</h2>
            <p className="panel__sub">Escolha uma forma de pagamento</p>
            <form onSubmit={finalizar} noValidate style={{ display: "contents" }}>
              <div className="pay-options">
                <div className="pay-option">
                  <label className="pay-option__head">
                    <input type="radio" name="metodo" value="cartao" checked={metodo === "cartao"} onChange={() => setMetodo("cartao")} />
                    <b>Cartão de crédito</b>
                  </label>
                  <div className="brands">
                    {BANDEIRAS.map(([arq, nome]) => <img key={arq} src={img(`bandeiras/${arq}.png`)} alt={nome} />)}
                  </div>
                  <div className="pay-option__body">
                    <Field label="Número do cartão" erro={ePag.cartao} inputMode="numeric" autoComplete="cc-number" {...cPag("cartao")} />
                    <Field label="Nome impresso no cartão" erro={ePag.titular} autoComplete="cc-name" {...cPag("titular")} />
                    <div className="row">
                      <Field label="Validade" erro={ePag.validade} placeholder="MM/AA" inputMode="numeric" autoComplete="cc-exp" {...cPag("validade")} />
                      <Field label="CVV" erro={ePag.cvv} inputMode="numeric" maxLength={4} autoComplete="cc-csc" {...cPag("cvv")} />
                    </div>
                    <Field label="Parcelas">
                      <select {...cPag("parcelas")}>
                        {Array.from({ length: 12 }, (_, n) => (
                          <option key={n} value={n + 1}>{n + 1}x de {brl(total / (n + 1))} sem juros</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                </div>
                <div className="pay-option">
                  <label className="pay-option__head">
                    <input type="radio" name="metodo" value="pix" checked={metodo === "pix"} onChange={() => setMetodo("pix")} />
                    <b>PIX</b>
                  </label>
                  <div className="pay-option__body">
                    <p className="pix-info">O QR Code e o código copia e cola aparecem após finalizar a compra. O pagamento é aprovado na hora.</p>
                  </div>
                </div>
              </div>
              <p className="field__error" style={{ textAlign: "center", marginTop: 10 }}>{erroPagamento}</p>
              <div className="pay-spacer" />
              <button className="btn-dark" type="submit" disabled={!itens.length}>Finalizar compra</button>
            </form>
          </section>

          {/* ===== Coluna 3: resumo ===== */}
          <aside className="panel panel--sum checkout__aside">
            <h2 className="panel__title">Resumo</h2>
            <div className="coupon">
              <span>Tem um cupom?</span>
              <div className="coupon__row">
                <input
                  value={cupom.texto}
                  onChange={(e) => setCupom((c) => ({ ...c, texto: e.target.value }))}
                  placeholder="Código do cupom"
                  aria-label="Código do cupom"
                />
                <button type="button" onClick={aplicarCupom}>Adicionar</button>
              </div>
              <p className={`coupon__msg ${cupom.msg ? (cupom.ok ? "ok" : "err") : ""}`}>{cupom.msg}</p>
            </div>
            <div className="sum-lines">
              <div><span>Produtos</span><span>{brl(subtotal)}</span></div>
              {desconto > 0 && <div><span>Desconto</span><span>− {brl(desconto)}</span></div>}
              <div><span>Frete</span><span>{subtotal ? (frete ? `+ ${brl(frete)}` : "Grátis") : "—"}</span></div>
            </div>
            <div className="sum-total"><span>Total</span><span>{brl(total)}</span></div>
            <div className="sum-items">
              {itens.length === 0 ? (
                <p className="sum-empty">Seu carrinho está vazio.<br /><Link to="/produtos" style={{ textDecoration: "underline" }}>Ver produtos</Link></p>
              ) : (
                itens.map((i) => <CartItem key={chaveItem(i)} item={i} variante="resumo" />)
              )}
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
