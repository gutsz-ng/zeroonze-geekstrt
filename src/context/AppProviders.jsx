import { ToastProvider } from "./ToastContext";
import { CarrinhoProvider } from "./CarrinhoContext";
import { FavoritosProvider } from "./FavoritosContext";
import { ContaProvider } from "./ContaContext";

/** Junta todos os contextos da loja num só lugar. */
export default function AppProviders({ children }) {
  return (
    <ToastProvider>
      <ContaProvider>
        <FavoritosProvider>
          <CarrinhoProvider>{children}</CarrinhoProvider>
        </FavoritosProvider>
      </ContaProvider>
    </ToastProvider>
  );
}
