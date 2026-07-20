import { Navigate, Route, Routes } from "react-router-dom";
import CoffeeDetailPage from "../pages/public/CoffeeDetailPage";
import CoffeesPage from "../pages/public/CoffeesPage";
import HomePage from "../pages/public/HomePage";
import MachineDetailPage from "../pages/public/MachineDetailPage";
import MachinePage from "../pages/public/MachinePage";

import ActivateAccountPage from "../pages/public/auth/ActivateAccountPage";
import ForgotPasswordPage from "../pages/public/auth/ForgotPasswordPage";
import LoginPage from "../pages/public/auth/LoginPage";
import RegisterPage from "../pages/public/auth/RegisterPage";
import ResetPasswordPage from "../pages/public/auth/ResetPasswordPage";

import OrderConfirmed from "../pages/public/OrderConfirmed";
import PayementPage from "../pages/public/PayementPage";
import SubscriptionPage from "../pages/public/Subscriptionpage";


export default function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/coffees" element={<CoffeesPage />} />
      <Route path="/coffees/:id" element={<CoffeeDetailPage />} />
      <Route path="/machines" element={<MachinePage />} />
      <Route path="/machine/:id" element={<MachineDetailPage />} />
      <Route path="/machines/:id" element={<MachineDetailPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route path="/activate/:token" element={<ActivateAccountPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/payment" element={<PayementPage />} />
      <Route path="/subscribe" element={<SubscriptionPage/>} />
      <Route path="/order-confirmed" element={<OrderConfirmed />}/>
    </Routes>
  );
}
