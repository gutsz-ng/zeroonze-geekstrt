import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import SavedPage from "./pages/SavedPage";
import NewsletterPage from "./pages/NewsletterPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";

/** Rotas da loja. */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Quem abre ".../index.html" (link salvo, GitHub Pages) vai para o início */}
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/produtos" element={<ProductListingPage />} />
      <Route path="/produto/:id" element={<ProductViewPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/entrar" element={<LoginPage />} />
      <Route path="/cadastro" element={<SignupPage />} />
      <Route path="/conta" element={<ProfilePage />} />
      <Route path="/pedidos" element={<OrdersPage />} />
      <Route path="/salvos" element={<SavedPage />} />
      <Route path="/newsletter" element={<NewsletterPage />} />
      <Route path="/privacidade" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
