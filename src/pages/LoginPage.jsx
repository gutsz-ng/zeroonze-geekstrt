import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Field from "../components/Field";
import { useConta } from "../context/ContaContext";
import { useToast } from "../context/ToastContext";
import { useBodyClass } from "../hooks/useBodyClass";
import { img } from "../utils/assets";

/** Acessar conta: login por e-mail ou apelido. */
export default function LoginPage() {
  useBodyClass("page-auth");
  const { conta, entrar } = useConta();
  const toast = useToast();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  if (conta) return <Navigate to="/conta" replace />;

  const enviar = async (e) => {
    e.preventDefault();
    if (!login.trim() || !senha) return setErro("Preencha login e senha.");
    const r = await entrar(login, senha);
    if (!r.ok) return setErro(r.erro);
    const nome = (r.conta.apelido || "").trim() || r.conta.nome.split(/\s+/)[0];
    toast(`Salve, ${nome}!`);
    navigate("/conta");
  };

  return (
    <Layout header="auth">
      <main className="auth">
        <div className="auth__col">
          <section className="auth-card">
            <h1 className="auth-card__title display">Acesse sua conta</h1>
            <p className="auth-card__sub">Novo cliente? Então registre-se <Link to="/cadastro">aqui</Link>.</p>

            <form onSubmit={enviar} noValidate>
              <Field estilo="conta" label="Login *" autoComplete="username" placeholder="Insira seu login ou email"
                value={login} onChange={(e) => setLogin(e.target.value)} />
              <Field estilo="conta" label="Senha *" type="password" autoComplete="current-password" placeholder="Insira sua senha"
                value={senha} onChange={(e) => setSenha(e.target.value)} />
              {erro && <p className="afield__error" aria-live="polite">{erro}</p>}
              <button
                type="button"
                className="auth-card__link"
                onClick={() => setErro("Recuperação de senha chega em breve. Por enquanto, crie uma nova conta ou fale com zeroonze.co@gmail.com.")}
              >
                Esqueci minha senha
              </button>
              <button className="auth-btn display" type="submit">Acessar Conta</button>
            </form>

            <div className="auth-social">
              <span>Ou faça login com</span>
              <button type="button" className="auth-social__btn" aria-label="Entrar com Google" onClick={() => toast("Login com Google chega em breve!")}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3Z" />
                  <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
                  <path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14Z" />
                  <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 6 12 6Z" />
                </svg>
              </button>
              <button type="button" className="auth-social__btn" aria-label="Entrar com Facebook" onClick={() => toast("Login com Facebook chega em breve!")}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="11" fill="#1877F2" />
                  <path fill="#fff" d="M13.3 20v-6.2h2.1l.3-2.4h-2.4V9.9c0-.7.2-1.2 1.2-1.2h1.3V6.6c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.7H8.6v2.4h2.1V20h2.6Z" />
                </svg>
              </button>
            </div>
          </section>

          <p className="auth__perks">
            Você passará a receber <b>cupons</b> e <b>novos drops</b> antes de todo mundo. Além de newsletter te atualizando de tudo sobre o <b>universo geek</b>.
          </p>
        </div>
        <div className="auth__photo" aria-hidden="true"><img src={img("conta.jpg")} alt="" /></div>
      </main>
    </Layout>
  );
}
