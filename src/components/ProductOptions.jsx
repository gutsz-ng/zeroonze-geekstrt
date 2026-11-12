import { CORES, TAMANHOS } from "../data/produtos";

/** Escolha de tamanho e cor. */
export default function ProductOptions({ tamanho, cor, onTamanho, onCor }) {
  return (
    <div className="product__opts">
      <div className="opt opt--tamanho">
        <h2 className="product__label display">Tamanho:</h2>
        <div className="sizes" role="radiogroup" aria-label="Tamanho">
          {TAMANHOS.map((t) => (
            <button
              key={t}
              className={`size ${tamanho === t ? "is-selected" : ""}`}
              role="radio"
              aria-checked={tamanho === t}
              onClick={() => onTamanho(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="opt opt--cor">
        <h2 className="product__label product__label--tight display">Cor:</h2>
        <div className="colors" role="radiogroup" aria-label="Cor">
          {Object.entries(CORES).map(([id, nome]) => (
            <button
              key={id}
              className={`color color--${id} ${cor === id ? "is-selected" : ""}`}
              role="radio"
              aria-checked={cor === id}
              aria-label={nome}
              title={nome}
              onClick={() => onCor(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
