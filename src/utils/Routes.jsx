import { createBrowserRouter } from "react-router-dom";
import { Registration } from "../app/auth";

export const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
]);
