import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useToast } from "./ToastContext";

const FavoritosContext = createContext(null);

/** Produtos salvos pelo cliente (botão "Salvar"). */
export function FavoritosProvider({ children }) {
  const toast = useToast();
  const [ids, setIds] = useLocalStorage("zo_favoritos", []);

  const tem = (id) => ids.includes(id);
  const alternar = (id) => {
    const salvo = tem(id);
    setIds((atual) => (salvo ? atual.filter((x) => x !== id) : [...atual, id]));
    toast(salvo ? "Produto removido dos salvos" : "Produto salvo! Veja em Meu Perfil › Produtos Salvos");
  };

  return <FavoritosContext.Provider value={{ ids, tem, alternar }}>{children}</FavoritosContext.Provider>;
}

export const useFavoritos = () => useContext(FavoritosContext);
