import { soDigitos } from "./format";

/** Máscaras aplicadas enquanto a pessoa digita. */
export const MASCARAS = {
  cpf: (v) =>
    soDigitos(v).slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"),
  celular: (v) =>
    soDigitos(v).slice(0, 11).replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2"),
  cep: (v) => soDigitos(v).slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2"),
  cartao: (v) => soDigitos(v).slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 "),
  validade: (v) => soDigitos(v).slice(0, 4).replace(/(\d{2})(\d)/, "$1/$2"),
};

const obrigatorio = (msg) => (v) => (v || "").trim() ? true : msg;

/** Cada regra devolve true ou a mensagem de erro. */
export const REGRAS = {
  nome: (v) => (v || "").trim().split(/\s+/).length >= 2 || "Informe nome e sobrenome.",
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || "").trim()) || "E-mail inválido.",
  cpf: (v) => {
    const c = soDigitos(v);
    if (c.length !== 11 || /^(\d)\1+$/.test(c)) return "CPF inválido.";
    for (const t of [9, 10]) {
      let soma = 0;
      for (let i = 0; i < t; i++) soma += +c[i] * (t + 1 - i);
      if (((soma * 10) % 11) % 10 !== +c[t]) return "CPF inválido.";
    }
    return true;
  },
  celular: (v) => soDigitos(v).length >= 10 || "Celular inválido.",
  cep: (v) => soDigitos(v).length === 8 || "CEP inválido.",
  endereco: obrigatorio("Informe o endereço."),
  numero: obrigatorio("Obrigatório."),
  bairro: obrigatorio("Informe o bairro."),
  cidade: obrigatorio("Informe a cidade."),
  destinatario: obrigatorio("Informe quem vai receber."),
  senha: (v) => (v || "").length >= 6 || "Use pelo menos 6 caracteres.",
  cartao: (v) => {
    const n = soDigitos(v);
    if (n.length < 13) return "Número do cartão inválido.";
    let soma = 0; // algoritmo de Luhn
    [...n].reverse().forEach((d, i) => {
      let x = +d;
      if (i % 2) { x *= 2; if (x > 9) x -= 9; }
      soma += x;
    });
    return soma % 10 === 0 || "Número do cartão inválido.";
  },
  titular: obrigatorio("Informe o nome do titular."),
  validade: (v) => {
    const [m, a] = (v || "").split("/").map(Number);
    if (!m || m > 12 || !a) return "Validade inválida.";
    return new Date(2000 + a, m, 0, 23, 59) >= new Date() || "Cartão vencido.";
  },
  cvv: (v) => /^\d{3,4}$/.test(v || "") || "CVV inválido.",
};

/**
 * Valida os campos indicados de um objeto de valores.
 * Retorna um objeto { campo: "mensagem" } só com os campos com erro.
 */
export function validar(valores, campos, regrasExtras = {}) {
  const regras = { ...REGRAS, ...regrasExtras };
  const erros = {};
  for (const campo of campos) {
    const r = regras[campo] ? regras[campo](valores[campo]) : true;
    if (r !== true) erros[campo] = r;
  }
  return erros;
}

/** Busca o endereço pelo CEP na API pública ViaCEP. */
export async function buscarCep(cep) {
  const limpo = soDigitos(cep);
  if (limpo.length !== 8) return null;
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${limpo}/json/`);
    const dados = await resposta.json();
    return dados.erro ? null : dados;
  } catch {
    return null; // sem conexão: a pessoa preenche manualmente
  }
}

/** Resumo SHA-256 da senha (o protótipo nunca guarda a senha em texto). */
export async function resumoSenha(texto) {
  try {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode("zo:" + texto));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    let h = 0;
    for (const ch of "zo:" + texto) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return "h" + h;
  }
}
