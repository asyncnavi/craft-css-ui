import {
  IconHome,
  IconMilitaryAward,
  IconSchool,
  IconSwords,
  IconTarget,
  IconUser,
} from "@tabler/icons-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const navigationItems = [
  {
    id: "nav-home",
    name: "Home",
    icon: <IconHome />,
    link: "/",
  },
  {
    id: "nav-target",
    name: "Targets",
    icon: <IconTarget />,
    link: "/target",
  },

  {
    id: "nav-leaderboard",
    name: "Leaderboard",
    icon: <IconMilitaryAward />,
    link: "/leaderboard",
  },
  {
    id: "nav-learn",
    name: "Learn CSS",
    icon: <IconSchool />,
    link: "/learn",
  },
  {
    id: "nav-battles",
    name: "Profile",
    icon: <IconUser />,
    link: "/profile",
  },
];

const NavigationRail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => pathname == path;

  return (
    <div className="fixed top-0 left-0 bottom-0 w-[100px] border-r border-r-slate-700 h-screen flex flex-col">
      <img src="/dark_logo.png" className="w-100" />
      <div className="flex flex-col gap-8 my-8">
        {navigationItems.map((item) => {
          return (
            <div
              onClick={() => navigate(item.link)}
              className="flex flex-col text-white justify-center items-center cursor-pointer gap-4"
            >
              <div
                className={clsx(
                  "rounded-3xl py-2 w-[60px]  flex items-center justify-center transition-colors ease-out duration-300",
                  isActive(item.link) && "bg-slate-400 text-slate-900",
                )}
              >
                {item.icon}
              </div>
              <h6 className="text-sm ">{item.name}</h6>
            </div>
          );
        })}
        <div className="flex flex-1" />
      </div>
    </div>
  );
};

export default NavigationRail;
