import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductDetails from "../components/ProductDetails";
import ProductListing from "../components/ProductListing";
import NotFoundPage from "./NotFoundPage";
import { buscarProduto, relacionados } from "../data/produtos";
import { useBodyClass } from "../hooks/useBodyClass";

export default function ProductViewPage() {
  const { id } = useParams();
  const produto = buscarProduto(id);
  useBodyClass("page-produto");

  useEffect(() => {
    if (produto) document.title = `${produto.nome} — ZeroOnze`;
    return () => { document.title = "ZeroOnze — Não é só anime, é estilo"; };
  }, [produto]);

  if (!produto) return <NotFoundPage mensagem="Produto não encontrado." />;

  return (
    <Layout>
      <main id="produto">
        <ProductDetails produto={produto} />
        <section className="related container">
          <h2 className="section__title display">Produtos relacionados</h2>
          <ProductListing produtos={relacionados(produto)} />
        </section>
      </main>
    </Layout>
  );
}
