import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
