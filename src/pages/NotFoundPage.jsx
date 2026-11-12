import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function NotFoundPage({ mensagem = "Página não encontrada." }) {
  return (
    <Layout>
      <main className="container page" style={{ textAlign: "center" }}>
        <h1 className="display">{mensagem}</h1>
        <p style={{ margin: "0 auto 24px" }}>O endereço pode ter mudado ou não existe.</p>
        <Link className="btn" to="/produtos">Ver produtos</Link>
      </main>
    </Layout>
  );
}
