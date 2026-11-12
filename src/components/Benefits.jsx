/** Frete grátis e parcelamento. */
export default function Benefits() {
  return (
    <section className="benefits container">
      <div className="benefit">
        <svg viewBox="0 0 124 92" aria-hidden="true">
          <path d="M8 0h66a8 8 0 0 1 8 8v8h18a8 8 0 0 1 6.4 3.2l14 18.7A8 8 0 0 1 122 42.7V68a6 6 0 0 1-6 6h-6.2a15 15 0 0 0-29.6 0H44.8a15 15 0 0 0-29.6 0H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8Zm74 26v16h28.7L99.3 26H82Z" />
          <circle cx="30" cy="77" r="11" />
          <circle cx="95" cy="77" r="11" />
        </svg>
        <h3 className="display">Frete Grátis</h3>
        <p>Garanta frete grátis em compras acima de R$200</p>
      </div>
      <div className="benefit">
        <svg viewBox="0 0 124 92" aria-hidden="true">
          <path d="M12 0h100a12 12 0 0 1 12 12v12H0V12A12 12 0 0 1 12 0ZM0 38h124v42a12 12 0 0 1-12 12H12A12 12 0 0 1 0 80V38Zm18 20a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6v-8a6 6 0 0 0-6-6H18Z" />
        </svg>
        <h3 className="display">Parcelamento</h3>
        <p>Parcele em até 12x!</p>
      </div>
    </section>
  );
}
