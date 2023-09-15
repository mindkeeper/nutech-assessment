import { createBrowserRouter } from "react-router-dom";
import { Login, Registration } from "../app/auth";

export const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
