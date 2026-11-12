/**
 * Campo de formulário com rótulo e mensagem de erro.
 * estilo "checkout" usa .field; estilo "conta" usa .afield.
 */
export default function Field({ label, erro, estilo = "checkout", className = "", children, ...inputProps }) {
  const base = estilo === "conta" ? "afield" : "field";
  return (
    <label className={`${base} ${className} ${erro ? "is-invalid" : ""}`.trim()}>
      <span>{label}</span>
      {children || <input {...inputProps} />}
      {erro && <small className="field__error">{erro}</small>}
    </label>
  );
}
