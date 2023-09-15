import { createBrowserRouter } from "react-router-dom";
import { Login, Registration } from "../app/auth";
import { MainLayout, ProtectedLayout } from "../components";
import { Home } from "../app/home";
import { TopUp } from "../app/top-up";

export const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/top-up",
            element: <TopUp />,
          },
        ],
      },
    ],
  },
]);
