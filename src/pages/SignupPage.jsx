import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Field from "../components/Field";
import { useConta } from "../context/ContaContext";
import { useToast } from "../context/ToastContext";
import { useBodyClass } from "../hooks/useBodyClass";
import { useFormulario } from "../hooks/useFormulario";
import { buscarCep, validar } from "../utils/validacao";
import { soDigitos } from "../utils/format";

const PESSOAIS = [
  ["nome", "Nome Completo *", "Insira seu nome", { autoComplete: "name" }],
  ["apelido", "Como prefere ser chamado?", "Apelido ou nome de preferência", { autoComplete: "nickname" }],
  ["cpf", "CPF *", "Insira seu CPF", { inputMode: "numeric" }],
  ["email", "E-mail *", "Insira seu email", { type: "email", autoComplete: "email" }],
  ["celular", "Celular *", "Insira seu celular", { type: "tel", inputMode: "numeric", autoComplete: "tel" }],
  ["senha", "Senha *", "Crie uma senha (mínimo 6 caracteres)", { type: "password", autoComplete: "new-password" }],
  ["senha2", "Confirmar senha *", "Repita a senha", { type: "password", autoComplete: "new-password" }],
];
const ENTREGA = [
  ["cep", "CEP *", "Insira seu CEP", { inputMode: "numeric", autoComplete: "postal-code" }],
  ["endereco", "Endereço *", "Insira seu endereço", { autoComplete: "address-line1" }],
  ["numero", "Número *", "Insira o número", { inputMode: "numeric" }],
  ["bairro", "Bairro *", "Insira seu bairro", {}],
  ["cidade", "Cidade *", "Insira sua cidade", { autoComplete: "address-level2" }],
  ["complemento", "Complemento", "Insira complemento", { autoComplete: "address-line2" }],
];

/** Criar conta. */
export default function SignupPage() {
  useBodyClass("page-auth");
  const { criarConta } = useConta();
  const toast = useToast();
  const navigate = useNavigate();
  const [erroGeral, setErroGeral] = useState("");
  const { valores, setValores, campo, erros, setErros } = useFormulario(
    { newsletter: true },
    { cpf: "cpf", celular: "celular", cep: "cep" }
  );

  // Endereço automático pelo CEP
  useEffect(() => {
    if (soDigitos(valores.cep || "").length !== 8) return;
    let ativo = true;
    buscarCep(valores.cep).then((d) => {
      if (!ativo || !d) return;
      setValores((v) => ({
        ...v,
        endereco: v.endereco || d.logradouro,
        bairro: v.bairro || d.bairro,
        cidade: v.cidade || `${d.localidade}/${d.uf}`,
      }));
    });
    return () => { ativo = false; };
  }, [valores.cep, setValores]);

  const enviar = async (e) => {
    e.preventDefault();
    setErroGeral("");
    const e2 = validar(
      valores,
      ["nome", "cpf", "email", "celular", "senha", "senha2", "cep", "endereco", "numero", "bairro", "cidade"],
      { senha2: (v) => v === valores.senha || "As senhas não conferem." }
    );
    setErros(e2);
    if (Object.keys(e2).length) return setErroGeral("Confira os campos destacados.");

    const limpo = Object.fromEntries(
      Object.entries(valores).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v])
    );
    const r = await criarConta({ apelido: "", complemento: "", ...limpo });
    if (!r.ok) return setErroGeral(r.erro);
    toast("Conta criada! Bem-vindo à ZeroOnze.");
    navigate("/conta");
  };

  const renderCampos = (lista) =>
    lista.map(([nome, rotulo, placeholder, extra]) => (
      <Field key={nome} estilo="conta" label={rotulo} placeholder={placeholder} erro={erros[nome]} {...extra} {...campo(nome)} />
    ));

  return (
    <Layout header="auth" headerComMenu={false}>
      <main className="signup">
        <h1 className="signup__title display">Criar Conta</h1>
        <form onSubmit={enviar} noValidate>
          <section className="auth-card">
            <h2 className="auth-card__section display">Informações Pessoais</h2>
            {renderCampos(PESSOAIS)}
          </section>
          <section className="auth-card">
            <h2 className="auth-card__section display">Informações de Entrega</h2>
            {renderCampos(ENTREGA)}
          </section>

          <label className="signup__check">
            <input
              type="checkbox"
              checked={!!valores.newsletter}
              onChange={(e) => setValores((v) => ({ ...v, newsletter: e.target.checked }))}
            />
            <span>Quero receber novidades da Zero Onze antes de todo mundo, além de fazer parte da newsletter. Poderá cancelar posteriormente se achar necessário.</span>
          </label>
          {erroGeral && <p className="afield__error" aria-live="polite">{erroGeral}</p>}
          <button className="auth-btn auth-btn--light display" type="submit">Criar Conta</button>
          <p className="signup__login">Já tem conta? <Link to="/entrar">Acesse aqui</Link>.</p>
        </form>
      </main>
    </Layout>
  );
}
