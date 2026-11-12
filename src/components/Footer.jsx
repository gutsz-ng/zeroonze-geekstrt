import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useConta } from "../context/ContaContext";

export default function Footer() {
  const { conta } = useConta();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <nav className="nav" aria-label="Rodapé">
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/produtos">Categorias</Link>
          <Link to={conta ? "/conta?aba=pedidos" : "/pedidos"}>Meus pedidos</Link>
        </nav>
        <Logo />
        <div className="footer__right">
          <Link to="/newsletter">Newsletter</Link>
          <Link to="/privacidade">Privacidade &amp; Dados</Link>
        </div>
      </div>
    </footer>
  );
}
