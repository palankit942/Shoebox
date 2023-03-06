import { Navigate } from "react-router-dom";

export function PrivateAuth({ children }) {
  const token = localStorage.getItem("ecommToken");
  return (!token) ? (
    children
  ) : (
    <Navigate to="/" replace />
  );
}