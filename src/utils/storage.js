/** Leitura e gravação segura no localStorage (o navegador pode bloquear). */
export const storage = {
  get(chave, padrao) {
    try {
      const valor = JSON.parse(localStorage.getItem(chave));
      return valor ?? padrao;
    } catch {
      return padrao;
    }
  },
  set(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      /* sem armazenamento disponível */
    }
  },
};
