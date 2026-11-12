/** Ícones SVG usados no site. */
const CAMINHOS = {
  busca: "M10 2a8 8 0 0 1 6.32 12.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.39-5.38A8 8 0 1 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z",
  conta: "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-9 2.24-9 5.5V22h18v-2.5c0-3.26-4.58-5.5-9-5.5Z",
  carrinho: "M1 2.5A1 1 0 0 1 2 1.5h2.2a1 1 0 0 1 .97.76L5.6 4H22a1 1 0 0 1 .97 1.24l-2 8A1 1 0 0 1 20 14H8.1l.5 2H20a1 1 0 1 1 0 2H7.8a1 1 0 0 1-.97-.76L3.42 3.5H2a1 1 0 0 1-1-1ZM9 21.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm11 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z",
};

export default function Icon({ name }) {
  if (name === "lupa") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="7" />
        <path d="m16 16 5.5 5.5" />
      </svg>
    );
  }
  if (name === "filtro") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 4h18l-7 8.5V20l-4-2v-5.5L3 4Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={CAMINHOS[name]} />
    </svg>
  );
}
