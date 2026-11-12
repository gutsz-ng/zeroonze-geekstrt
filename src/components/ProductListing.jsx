import ProductCard from "./ProductCard";

/**
 * Grade de cards.
 * variante: "tres" (Novo Drop), "destaque" (Drops em destaque) ou "loja" (catálogo).
 */
const CLASSES = { tres: "grid grid--3", destaque: "grid grid--featured", loja: "grid grid--shop" };

export default function ProductListing({ produtos, variante = "loja", vazio = null, id, style, renderExtra }) {
  return (
    <div className={CLASSES[variante]} id={id} style={style}>
      {produtos.length === 0
        ? vazio
        : produtos.map((p) => (
            <ProductCard key={p.id} produto={p}>
              {renderExtra?.(p)}
            </ProductCard>
          ))}
    </div>
  );
}
