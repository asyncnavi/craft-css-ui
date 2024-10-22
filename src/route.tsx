import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PlayGround from "./pages/play";
import Profile from './pages/profile';
import Targets from "./pages/Targets";
import Board from "./pages/Board";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/play",
    element: <PlayGround />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/targets",
    element: <Targets />
  },
  {
    path: "/board",
    element: <Board />
  }
]);

export default router;