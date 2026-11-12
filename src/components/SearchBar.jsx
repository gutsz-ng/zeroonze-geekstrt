import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Icon from "./Icon";

/** Campo de busca: envia para /produtos?busca=... */
export default function SearchBar({ placeholder = "Buscar produtos", autoFocus = false, onBuscar }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [texto, setTexto] = useState(params.get("busca") || "");

  useEffect(() => setTexto(params.get("busca") || ""), [params]);

  const enviar = (e) => {
    e.preventDefault();
    const termo = texto.trim();
    navigate(termo ? `/produtos?busca=${encodeURIComponent(termo)}` : "/produtos");
    onBuscar?.();
  };

  return (
    <form className="search" role="search" onSubmit={enviar}>
      <input
        type="search"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar produtos"
        autoFocus={autoFocus}
      />
      <button type="submit" aria-label="Buscar">
        <Icon name="lupa" />
      </button>
    </form>
  );
}
