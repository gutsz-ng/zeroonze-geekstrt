import { useEffect, useState } from "react";

const CONSULTA = "(max-width: 760px)";

/** true quando a tela tem até 760 px (layout de celular). */
export function useEhCelular() {
  const [celular, setCelular] = useState(() => window.matchMedia(CONSULTA).matches);
  useEffect(() => {
    const mq = window.matchMedia(CONSULTA);
    const mudar = () => setCelular(mq.matches);
    mq.addEventListener("change", mudar);
    return () => mq.removeEventListener("change", mudar);
  }, []);
  return celular;
}
