import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Benefits from "../components/Benefits";
import { PRODUTOS } from "../data/produtos";

export default function HomePage() {
  const novoDrop = PRODUTOS.filter((p) => p.novo);
  const destaques = PRODUTOS.filter((p) => p.destaque);

  return (
    <Layout header="inicio">
      <main>
        <Hero />
        <p className="tagline display">Seu estilo, suas regras: vista sem pedir permissão.</p>

        <Section
          id="novo-drop"
          title="Novo Drop - ERA DOS PIRATAS"
          subtitle="Sua recompensa aumentou. Garanta sua armadura pro asfalto antes que o estoque zere."
        >
          <ProductListing produtos={novoDrop} variante="tres" style={{ width: "min(1171px, 100%)", marginInline: "auto" }} />
        </Section>

        <Section id="destaques" title={<>Drops em<br />destaque</>}>
          <ProductListing produtos={destaques} variante="destaque" />
        </Section>

        <Benefits />
      </main>
    </Layout>
  );
}
