import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { normalizar } from "../utils/format";
import { resumoSenha } from "../utils/validacao";

const ContaContext = createContext(null);

/**
 * Contas de cliente e pedidos.
 * Protótipo: tudo fica no navegador. A senha é guardada só como resumo SHA-256.
 */
export function ContaProvider({ children }) {
  const [contas, setContas] = useLocalStorage("zo_contas", []);
  const [sessao, setSessao] = useLocalStorage("zo_sessao", null);
  const [pedidos, setPedidos] = useLocalStorage("zo_pedidos", []);

  const conta = contas.find((c) => c.email === sessao) || null;

  /** Apelido inteiro; sem apelido, o primeiro nome. */
  const nomeDeExibicao = (c = conta) =>
    !c ? "" : (c.apelido || "").trim() || (c.nome || "").trim().split(/\s+/)[0];

  async function criarConta(dados) {
    const email = dados.email.trim().toLowerCase();
    if (contas.some((c) => c.email === email)) {
      return { ok: false, erro: "Já existe uma conta com este e-mail. Acesse sua conta." };
    }
    const { senha, senha2, ...resto } = dados;
    const nova = { ...resto, email, senha: await resumoSenha(senha), criadaEm: new Date().toISOString() };
    setContas((atual) => [...atual, nova]);
    setSessao(email);
    return { ok: true, conta: nova };
  }

  async function entrar(login, senha) {
    const alvo = normalizar(login);
    const achada = contas.find((c) => c.email === alvo || (c.apelido && normalizar(c.apelido) === alvo));
    if (!achada || achada.senha !== (await resumoSenha(senha))) {
      return { ok: false, erro: "Login ou senha incorretos." };
    }
    setSessao(achada.email);
    return { ok: true, conta: achada };
  }

  const sair = () => setSessao(null);

  const atualizar = (dados) =>
    setContas((atual) => atual.map((c) => (c.email === sessao ? { ...c, ...dados } : c)));

  const criarPedido = (dados) => {
    const pedido = { numero: Math.floor(100000 + Math.random() * 900000), data: new Date().toISOString(), ...dados };
    setPedidos((atual) => [pedido, ...atual]);
    return pedido;
  };

  const valor = { conta, nomeDeExibicao, criarConta, entrar, sair, atualizar, pedidos, criarPedido };
  return <ContaContext.Provider value={valor}>{children}</ContaContext.Provider>;
}

export const useConta = () => useContext(ContaContext);
