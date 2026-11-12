import { Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useConta } from "../context/ContaContext";
import { brl } from "../utils/format";

/** Meus pedidos para quem não tem conta aberta (com conta, vai para o perfil). */
export default function OrdersPage() {
  const { conta, pedidos } = useConta();
  if (conta) return <Navigate to="/conta?aba=pedidos" replace />;

  return (
    <Layout>
      <main className="container page">
        <h1 className="display">Meus pedidos</h1>
        {pedidos.length === 0 ? (
          <>
            <p>Você ainda não fez nenhum pedido.</p>
            <Link className="btn" to="/produtos" style={{ marginTop: 12 }}>Ver produtos</Link>
          </>
        ) : (
          pedidos.map((p) => (
            <div className="order" key={p.numero + p.data}>
              <div className="order__head">
                <strong>Pedido #{p.numero}</strong>
                <span>{new Date(p.data).toLocaleDateString("pt-BR")} · {p.status || "Em separação"}</span>
              </div>
              <ul>
                {p.itens.map((i, k) => (
                  <li key={k}><span>{i.qtd}× {i.nome}</span><span>{brl(i.preco * i.qtd)}</span></li>
                ))}
              </ul>
              {p.entrega && <p style={{ fontSize: 14, color: "#aaa", margin: "10px 0 0" }}>Entrega: {p.entrega}</p>}
              {p.pagamento && <p style={{ fontSize: 14, color: "#aaa", margin: "4px 0 0" }}>Pagamento: {p.pagamento}</p>}
              <p className="order__total">Total: {brl(p.total)}</p>
            </div>
          ))
        )}
      </main>
    </Layout>
  );
}
