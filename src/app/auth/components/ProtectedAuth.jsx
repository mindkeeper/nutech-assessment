import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export function ProtectedAuth() {
  const { accessToken } = useSelector((state) => state.auth);
  return !accessToken ? <Outlet /> : <Navigate to="/" replace />;
}
