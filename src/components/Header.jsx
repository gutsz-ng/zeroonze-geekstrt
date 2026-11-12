import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import HeaderIcons from "./HeaderIcons";
import SearchBar from "./SearchBar";

/**
 * Cabeçalho do computador.
 * variante "inicio": menu à esquerda, logo no centro, busca suspensa.
 * variante "loja":   logo, barra de busca e menu embaixo.
 * variante "auth":   só logo (e menu, se pedido).
 */
export default function Header({ variante = "loja", comMenu = true }) {
  const [buscaAberta, setBuscaAberta] = useState(false);

  if (variante === "auth") {
    return (
      <header className="header header--auth">
        <div className="container header--auth__inner">
          <Logo />
          {comMenu && <NavLinks />}
        </div>
      </header>
    );
  }

  if (variante === "inicio") {
    return (
      <header className="header">
        <div className="container header__inner">
          <NavLinks />
          <Logo />
          <HeaderIcons onBusca={() => setBuscaAberta((a) => !a)} />
        </div>
        <div className={`search-pop ${buscaAberta ? "is-open" : ""}`}>
          <div className="container">
            {buscaAberta && (
              <SearchBar placeholder="Buscar produtos, ex.: Dragon Ball" autoFocus onBuscar={() => setBuscaAberta(false)} />
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header header--shop">
      <div className="container header__inner">
        <Logo />
        <SearchBar />
        <HeaderIcons />
      </div>
      <div className="container">
        <NavLinks />
      </div>
    </header>
  );
}
