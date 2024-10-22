import { useState, useEffect } from "react";
import NavigationRail from "../../component/navigation-rail";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { logOutUser } from "../../slice/auth.ts";
import Trending from "./Trending";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen text-white bg-slate-950">
      <NavigationRail />
      <main className={`flex-1 p-4 md:p-6 lg:p-8 ${isMobile ? "" : "md:ml-20"}`}>
        <div className="grid w-full gap-6 md:gap-8 lg:gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start justify-center p-6 space-y-4 md:space-y-6 rounded-3xl bg-slate-900 lg:p-8">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">Craft CSS</h1>
            <p className="text-sm md:text-base lg:text-lg">
              Join the ultimate multiplayer challenge for web designers and
              developers! Recreate target images using CSS, and the more concise
              your code, the higher your score. Dive into the fun of coding!
            </p>
            <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
              <Link
                to="/login"
                className="w-full px-6 py-3 text-sm text-center transition-colors duration-300 rounded-full md:text-base lg:text-lg bg-violet-900 hover:bg-violet-800 sm:w-auto"
              >
                Get started
              </Link>
              <Link
                onClick={() => dispatch(logOutUser())}
                to="/login"
                className="w-full px-6 py-3 text-sm text-center transition-colors duration-300 bg-red-900 rounded-full md:text-base lg:text-lg hover:bg-red-800 sm:w-auto"
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <video loop autoPlay muted playsInline className="object-cover w-full h-full rounded-3xl">
              <source src="/hero_vdo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <Trending />
      </main>
    </div>
  );
};

export default Home;