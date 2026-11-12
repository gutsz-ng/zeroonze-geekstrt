/** Formata número como moeda brasileira: 89.9 → "R$ 89,90" */
export const brl = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/** Minúsculas e sem acentos, para comparar textos na busca. */
export const normalizar = (texto = "") =>
  texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();

/** Só os dígitos de um texto. */
export const soDigitos = (v = "") => v.replace(/\D/g, "");
