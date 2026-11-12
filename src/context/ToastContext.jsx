import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastContext = createContext(null);

/** Aviso curto que aparece na parte de baixo da tela. */
export function ToastProvider({ children }) {
  const [mensagem, setMensagem] = useState("");
  const [visivel, setVisivel] = useState(false);
  const timer = useRef(null);

  const mostrar = useCallback((texto) => {
    setMensagem(texto);
    setVisivel(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisivel(false), 2200);
  }, []);

  return (
    <ToastContext.Provider value={mostrar}>
      {children}
      <div className={`toast ${visivel ? "is-show" : ""}`} role="status" aria-live="polite">
        {mensagem}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
