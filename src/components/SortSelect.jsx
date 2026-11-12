export const ORDENACOES = {
  relevantes: "mais relevantes",
  menor: "menor preço",
  maior: "maior preço",
  az: "nome (A–Z)",
};

/** Caixa "Ordenar por". */
export default function SortSelect({ valor, onChange }) {
  return (
    <div className="sort">
      <label htmlFor="sort"><b>Ordenar por</b>:</label>
      <select id="sort" value={valor} onChange={(e) => onChange(e.target.value)}>
        {Object.entries(ORDENACOES).map(([v, rotulo]) => (
          <option key={v} value={v}>{rotulo}</option>
        ))}
      </select>
    </div>
  );
}
