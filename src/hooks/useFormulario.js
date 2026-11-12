import { useState } from "react";
import { MASCARAS } from "../utils/validacao";

/**
 * Estado simples de formulário.
 * mascaras: { campo: "cpf" | "cep" | ... } aplica a máscara enquanto digita.
 */
export function useFormulario(inicial, mascaras = {}) {
  const [valores, setValores] = useState(inicial);
  const [erros, setErros] = useState({});

  const campo = (nome) => ({
    name: nome,
    value: valores[nome] ?? "",
    onChange: (e) => {
      const bruto = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      const valor = mascaras[nome] ? MASCARAS[mascaras[nome]](bruto) : bruto;
      setValores((v) => ({ ...v, [nome]: valor }));
      if (erros[nome]) setErros((er) => ({ ...er, [nome]: undefined }));
    },
  });

  const preencher = (dados) => setValores((v) => ({ ...v, ...dados }));

  return { valores, setValores, preencher, campo, erros, setErros };
}
