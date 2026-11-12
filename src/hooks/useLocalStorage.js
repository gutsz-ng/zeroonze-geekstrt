import { useEffect, useState } from "react";
import { storage } from "../utils/storage";

/** useState que também salva o valor no localStorage. */
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => storage.get(chave, valorInicial));
  useEffect(() => storage.set(chave, valor), [chave, valor]);
  return [valor, setValor];
}
