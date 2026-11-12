import { createContext, useContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { buscarProduto, CORES } from "../data/produtos";
import { useToast } from "./ToastContext";

const CarrinhoContext = createContext(null);

/** Cada item é identificado por produto + tamanho + cor. */
export const chaveItem = (item) => `${item.id}|${item.tamanho}|${item.cor}`;

export const FRETE = 24.69;
export const FRETE_GRATIS_A_PARTIR = 200;

export function CarrinhoProvider({ children }) {
  const toast = useToast();
  const [salvos, setItens] = useLocalStorage("zo_carrinho", []);
  const [aberto, setAberto] = useState(false);

  // Ignora itens antigos ou de produtos que não existem mais
  const itens = useMemo(
    () => salvos.filter((i) => buscarProduto(i.id) && i.tamanho && i.cor),
    [salvos]
  );

  const adicionar = (id, tamanho, cor) => {
    const novo = { id, tamanho, cor, qtd: 1 };
    setItens((atual) => {
      const existe = atual.find((i) => chaveItem(i) === chaveItem(novo));
      return existe
        ? atual.map((i) => (i === existe ? { ...i, qtd: i.qtd + 1 } : i))
        : [...atual, novo];
    });
    toast(`${buscarProduto(id).nome} (${tamanho}) adicionada ao carrinho`);
  };

  const alterar = (chave, delta) =>
    setItens((atual) =>
      atual
        .map((i) => (chaveItem(i) === chave ? { ...i, qtd: i.qtd + delta } : i))
        .filter((i) => i.qtd > 0)
    );

  const remover = (chave) => setItens((atual) => atual.filter((i) => chaveItem(i) !== chave));
  const esvaziar = () => setItens([]);

  const subtotal = itens.reduce((s, i) => s + buscarProduto(i.id).preco * i.qtd, 0);
  const quantidade = itens.reduce((s, i) => s + i.qtd, 0);

  /** Itens prontos para gravar num pedido. */
  const paraPedido = () =>
    itens.map((i) => {
      const p = buscarProduto(i.id);
      return {
        id: p.id, produto: p.nome, tamanho: i.tamanho, cor: i.cor, qtd: i.qtd, preco: p.preco,
        nome: `${p.nome} — ${i.tamanho} / ${CORES[i.cor]}`,
      };
    });

  const valor = {
    itens, adicionar, alterar, remover, esvaziar, subtotal, quantidade, paraPedido,
    aberto, abrir: () => setAberto(true), fechar: () => setAberto(false), alternar: () => setAberto((a) => !a),
  };

  return <CarrinhoContext.Provider value={valor}>{children}</CarrinhoContext.Provider>;
}

export const useCarrinho = () => useContext(CarrinhoContext);
