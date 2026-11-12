import { Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProductListing from "../components/ProductListing";
import { useConta } from "../context/ContaContext";
import { useFavoritos } from "../context/FavoritosContext";
import { buscarProduto } from "../data/produtos";

/** Produtos salvos para quem não tem conta aberta. */
export default function SavedPage() {
  const { conta } = useConta();
  const { ids, alternar } = useFavoritos();
  if (conta) return <Navigate to="/conta?aba=salvos" replace />;

  const salvos = [...ids].reverse().map(buscarProduto).filter(Boolean);

  return (
    <Layout>
      <main className="container page">
        <div className="saved-head">
          <h1 className="display">Produtos salvos</h1>
          <Link className="saved-head__link" to="/pedidos">Ver meus pedidos →</Link>
        </div>
        {salvos.length > 0 && (
          <p className="saved-count">{salvos.length} produto{salvos.length === 1 ? "" : "s"} que você curtiu</p>
        )}
        <ProductListing
          produtos={salvos}
          id="grid-salvos"
          renderExtra={(p) => <button className="card__unsave" onClick={() => alternar(p.id)}>Remover dos salvos</button>}
          vazio={
            <div className="empty">
              <p>Você ainda não salvou nenhuma camisa.</p>
              <p style={{ marginTop: 8 }}>Na página de um produto, clique em <b>Salvar</b> para guardar aqui as que você curtiu.</p>
              <Link className="btn" to="/produtos" style={{ marginTop: 20 }}>Ver produtos</Link>
            </div>
          }
        />
      </main>
    </Layout>
  );
}
