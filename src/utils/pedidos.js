/** Status simulado pelo tempo desde a compra (não há transportadora ligada). */
export function statusPedido(pedido) {
  if ((pedido.status || "").includes("PIX")) return { tipo: "andamento", texto: "Aguardando pagamento" };
  const dias = (Date.now() - new Date(pedido.data)) / 864e5;
  if (dias >= 5) return { tipo: "ok", texto: "Produto recebido" };
  if (dias >= 1) return { tipo: "andamento", texto: "Produto em trânsito" };
  return { tipo: "novo", texto: "Em separação" };
}
