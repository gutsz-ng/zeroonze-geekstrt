import { CORES, fotoCostas, fotoFrente } from "../data/produtos";
import { img } from "../utils/assets";

/** Foto grande do produto e miniaturas Costas / Frente. */
export default function ProductGallery({ produto, cor, lado, onLado }) {
  const costas = fotoCostas(produto, cor);
  const frente = fotoFrente(produto, cor);
  const atual = lado === "frente" && frente ? frente : costas;

  return (
    <div className="product__gallery">
      <div className="product__media">
        <img
          src={img(atual)}
          alt={`Camiseta ${produto.nome} ${CORES[cor].toLowerCase()} — ${lado === "frente" && frente ? "frente" : "costas"}`}
        />
      </div>
      {frente && (
        <div className="views" role="tablist" aria-label="Ver frente ou costas">
          {[["costas", "Costas", costas], ["frente", "Frente", frente]].map(([id, nome, src]) => (
            <button
              key={id}
              className={`view ${(lado === "frente") === (id === "frente") ? "is-selected" : ""}`}
              role="tab"
              aria-selected={(lado === "frente") === (id === "frente")}
              onClick={() => onLado(id)}
            >
              <img src={img(src)} alt="" />
              <span>{nome}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
