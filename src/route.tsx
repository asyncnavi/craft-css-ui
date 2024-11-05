import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PlayGround from "./pages/play";
import LearnPage from "./pages/learn";
import Profile from "./pages/profile";
import Target from "./pages/target";
import Leaderboard from "./pages/leaderboard";

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
    path: "/play/:targetId",
    element: <PlayGround />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/learn",
    element: <LearnPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/target",
    element: <Target />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

export default router;
