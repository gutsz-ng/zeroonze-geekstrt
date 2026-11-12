import Layout from "../components/Layout";

/** Política de Privacidade & Dados (LGPD). */
export default function PrivacyPage() {
  return (
    <Layout>
      <main className="container page policy">
          <h1 className="display">Privacidade &amp; Dados</h1>

          <h2 className="display">Quem somos</h2>
          {/* Substitua XX.XXX.XXX/0001-XX pelo CNPJ real */}
          <p>A Zero Onze (By Zero Onze, CNPJ XX.XXX.XXX/0001-XX) é responsável pelo tratamento dos seus dados pessoais nesta loja virtual, na qualidade de Controladora de Dados nos termos da Lei n.º 13.709/2018 — LGPD.</p>

          <h2 className="display">Para que usamos seus dados</h2>
          <p>Coletamos apenas os dados estritamente necessários para:</p>
          <ul>
            <li>Processar seu pedido e emitir nota fiscal (NF-e).</li>
            <li>Realizar a entrega no endereço informado.</li>
            <li>Confirmar o pagamento e prevenir fraudes.</li>
            <li>Comunicar sobre seu pedido por e-mail e telefone.</li>
            <li>Cumprir obrigações legais (Código de Defesa do Consumidor, Receita Federal).</li>
          </ul>

          <h2 className="display">Compartilhamento</h2>
          <p>Seus dados são compartilhados apenas com:</p>
          <ul>
            <li>Transportadoras (Correios, Loggi) — para entrega.</li>
            <li>Gateway de pagamento — para processar a transação com segurança.</li>
            <li>Autoridades públicas — quando exigido por lei.</li>
          </ul>
          <p>Nunca vendemos, alugamos ou cedemos seus dados a anunciantes ou terceiros para fins de marketing sem seu consentimento.</p>

          <h2 className="display">Por quanto tempo guardamos</h2>
          <p>Dados de pedidos são mantidos por 5 anos para fins fiscais e de garantia, conforme exige a legislação brasileira. Após esse prazo, são eliminados de forma segura.</p>

          <h2 className="display">Segurança</h2>
          <p>Utilizamos criptografia TLS/SSL em todas as comunicações. Dados de cartão de crédito nunca são armazenados em nossos servidores — são processados diretamente pelo gateway de pagamento certificado PCI-DSS.</p>

          <h2 className="display">Contato com o DPO</h2>
          <p>Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato com nosso Encarregado de Dados (DPO):</p>
          <p><a className="policy__mail" href="mailto:zeroonze.co@gmail.com">zeroonze.co@gmail.com</a></p>
        </main>
    </Layout>
  );
}
