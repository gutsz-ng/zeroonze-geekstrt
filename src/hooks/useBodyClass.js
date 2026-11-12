import { useEffect } from "react";

/** Coloca uma classe no <body> enquanto a página estiver aberta. */
export function useBodyClass(classe) {
  useEffect(() => {
    if (!classe) return undefined;
    document.body.classList.add(classe);
    return () => document.body.classList.remove(classe);
  }, [classe]);
}
