import { useEffect, useState } from "react";
import ProductGallery from "./ProductGallery";
import BuyBox from "./BuyBox";
import { fotoCostas, fotoFrente } from "../data/produtos";
import { img } from "../utils/assets";

/** Galeria + área de compra de um produto. */
export default function ProductDetails({ produto }) {
  const [cor, setCor] = useState(produto.cor);
  const [lado, setLado] = useState("costas");

  // Ao trocar de produto, volta para a cor principal e as costas
  useEffect(() => {
    setCor(produto.cor);
    setLado("costas");
  }, [produto.id, produto.cor]);

  // Pré-carrega as outras fotos para a troca ser instantânea
  useEffect(() => {
    for (const c of ["preto", "branco"]) {
      [fotoCostas(produto, c), fotoFrente(produto, c)].filter(Boolean).forEach((f) => {
        new Image().src = img(f);
      });
    }
  }, [produto]);

  return (
    <section className="product">
      <ProductGallery produto={produto} cor={cor} lado={lado} onLado={setLado} />
      <BuyBox key={produto.id} produto={produto} cor={cor} onCor={setCor} />
    </section>
  );
}
