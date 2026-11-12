import { img } from "../utils/assets";

export default function Hero() {
  return (
    <section className="hero">
      <img src={img("hero.jpg")} alt="Modelos vestindo camisetas oversized ZeroOnze" />
      <h1 className="hero__title display">Não é só anime<br />é estilo</h1>
    </section>
  );
}
