import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { NEWSLETTER } from "../data/newsletter";
import { buscarProduto } from "../data/produtos";
import { brl } from "../utils/format";
import { img } from "../utils/assets";

/** Edição atual da newsletter, aberta pelo link do rodapé. */
export default function NewsletterPage() {
  const n = NEWSLETTER;
  const vitrine = n.vitrine.map(buscarProduto).filter(Boolean);

  return (
    <Layout>
      <main className="container nl">
        <div className="nl-top">
          <span className="nl-tag">Newsletter · {n.edicao}</span>
          <Link to="/cadastro">Receba no seu e-mail</Link>
        </div>

        <section className="nl-hero">
          <img src={img("hero.jpg")} alt="Modelos vestindo camisetas oversized ZeroOnze" />
          <div className="nl-hero__text">
            <p className="nl-hero__kicker">Giro Anime</p>
            <h1 className="nl-hero__title">{n.titulo}</h1>
          </div>
        </section>

        <section className="nl-intro">
          <h2>Fala, pessoal!</h2>
          <p>{n.abertura}</p>
        </section>

        <section>
          <div className="nl-sec"><h2>Destaques da edição</h2><span>{n.noticias.length} notícias</span></div>
          <div className="nl-grid">
            {n.noticias.map((x, i) => (
              <article key={x.titulo} className={`nl-card ${x.destaque ? "nl-card--wide" : ""}`}>
                <span className="nl-card__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="nl-chip">{x.quando}</span>
                <h3>{x.titulo}</h3>
                <p>{x.texto}</p>
                {x.fonte && <p className="nl-src">Fonte: {x.fonte}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="nl-agenda">
          <div className="nl-sec"><h2>Anota na agenda</h2><span>Datas e status</span></div>
          <table className="nl-table">
            <thead><tr><th>Título / Evento</th><th>Novidade</th><th>Quando</th></tr></thead>
            <tbody>
              {n.agenda.map(([titulo, novidade, quando]) => (
                <tr key={titulo}><td>{titulo}</td><td>{novidade}</td><td>{quando}</td></tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="nl-shop">
          <div className="nl-shop__photo"><img src={img("newsletter-destaque.jpg")} alt="Camisetas Sharingan Clan e Itachi da ZeroOnze" /></div>
          <div className="nl-shop__body">
            <h2>Não é só anime, é estilo.</h2>
            <p>Enquanto 2027 não chega, vista quem você acompanha.</p>
            <div className="nl-prods">
              {vitrine.map((p) => (
                <Link className="nl-prod" key={p.id} to={`/produto/${p.id}`}>
                  <img src={img(p.img)} alt={p.nome} />
                  <b>{p.nome.replace("Oversized ", "")}</b>
                  <span>{brl(p.preco)}</span>
                </Link>
              ))}
            </div>
            <Link className="nl-btn" to="/produtos">Ver todos os produtos</Link>
          </div>
        </section>

        <section className="nl-cta">
          <div><h2>Qual desses lançamentos você está mais ansioso para assistir?</h2></div>
          <div>
            <p>Quer receber o Giro Anime no seu e-mail antes de todo mundo? Crie sua conta e marque a opção da newsletter.</p>
            <Link className="nl-btn nl-btn--dark" to="/cadastro">Quero receber</Link>
          </div>
        </section>

        <p className="nl-sources">Fontes e leitura complementar: {n.fontes}</p>
      </main>
    </Layout>
  );
}
