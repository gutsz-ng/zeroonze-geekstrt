/**
 * Caminho de uma imagem da pasta public/img.
 * Usa o BASE_URL do Vite para funcionar também em subpastas (GitHub Pages).
 */
export const img = (arquivo) => (arquivo ? `${import.meta.env.BASE_URL}img/${arquivo}` : null);
