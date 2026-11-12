import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import { useCarrinho } from "../context/CarrinhoContext";

/** Estrutura comum a todas as páginas: cabeçalhos, conteúdo, rodapé e carrinho. */
export default function Layout({ header = "loja", headerComMenu = true, children }) {
  const { pathname, search } = useLocation();
  const { fechar } = useCarrinho();

  // Volta ao topo e fecha o carrinho a cada troca de página
  useEffect(() => {
    window.scrollTo(0, 0);
    fechar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, search]);

  return (
    <>
      <MobileHeader />
      <Header variante={header} comMenu={headerComMenu} />
      {children}
      <Footer />
      <CartDrawer />
    </>
  );
}
