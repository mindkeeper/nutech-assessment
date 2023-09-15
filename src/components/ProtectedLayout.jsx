import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export function ProtectedLayout() {
  const { accessToken } = useSelector((state) => state.auth);
  return accessToken ? <Outlet /> : <Navigate to={"/login"} replace />;
}
