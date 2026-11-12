import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import SortSelect from "../components/SortSelect";
import Icon from "../components/Icon";
import { CATEGORIAS, PRODUTOS } from "../data/produtos";
import { normalizar } from "../utils/format";

/** Catálogo: busca (?busca=), categoria (?categoria=) e ordenação. */
export default function ProductListingPage() {
  const [params] = useSearchParams();
  const busca = params.get("busca") || "";
  const categoria = params.get("categoria") || "";
  const [ordem, setOrdem] = useState("relevantes");
  const [filtroAberto, setFiltroAberto] = useState(false);

  const produtos = useMemo(() => {
    let lista = PRODUTOS.map((p, ordemOriginal) => ({ ...p, ordemOriginal }));
    if (categoria) lista = lista.filter((p) => p.categoria === categoria);
    if (busca) {
      const termos = normalizar(busca).split(/\s+/);
      lista = lista.filter((p) => {
        const texto = normalizar(`${p.nome} ${CATEGORIAS[p.categoria]} ${p.tags}`);
        return termos.every((t) => texto.includes(t));
      });
    }
    const comparar = {
      menor: (a, b) => a.preco - b.preco,
      maior: (a, b) => b.preco - a.preco,
      az: (a, b) => a.nome.localeCompare(b.nome, "pt-BR"),
      relevantes: (a, b) => a.ordemOriginal - b.ordemOriginal,
    };
    return lista.sort(comparar[ordem]);
  }, [busca, categoria, ordem]);

  const titulo = busca
    ? `Resultados para “${busca}”`
    : CATEGORIAS[categoria]
      ? `Categoria: ${CATEGORIAS[categoria]}`
      : "Todos os produtos";

  return (
    <Layout>
      <main className="container">
        <div className="shop-bar">
          <div className="shop-bar__info">
            <h1 className="shop-bar__title display">{titulo}</h1>
            <span className="shop-bar__count">
              {produtos.length} produto{produtos.length === 1 ? "" : "s"}
            </span>
          </div>
          <div className="shop-bar__controls">
            <SortSelect valor={ordem} onChange={setOrdem} />
            <button
              className={`filter-btn ${filtroAberto ? "is-open" : ""}`}
              onClick={() => setFiltroAberto((a) => !a)}
              aria-label="Filtrar por categoria"
              aria-expanded={filtroAberto}
            >
              <Icon name="filtro" />
            </button>
          </div>
        </div>

        <FilterGroup
          categoriaAtiva={busca ? null : categoria}
          aberto={filtroAberto}
          onEscolher={() => setFiltroAberto(false)}
        />

        <ProductListing
          id="grid-produtos"
          produtos={produtos}
          style={{ marginBottom: 180 }}
          vazio={
            <p className="empty">
              Nenhum produto encontrado. <Link to="/produtos" style={{ textDecoration: "underline" }}>Ver todos</Link>
            </p>
          }
        />
      </main>
    </Layout>
  );
}
