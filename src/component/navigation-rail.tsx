import {
  IconHome,
  IconMilitaryAward,
  IconSchool,
  IconSwords,
  IconTarget,
} from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";

const NavigationItems = [
  {
    id: "nav-home",
    name: "Home",
    icon: <IconHome />,
  },
  {
    id: "nav-target",
    name: "Targets",
    icon: <IconTarget />,
  },
  {
    id: "nav-battles",
    name: "Battles",
    icon: <IconSwords />,
  },
  {
    id: "nav-leaderboard",
    name: "Leaderboard",
    icon: <IconMilitaryAward />,
  },
  {
    id: "nav-learn",
    name: "Learn CSS",
    icon: <IconSchool />,
  },
];

const NavigationRail = () => {
  const [activeNav, setActiveNav] = useState("nav-home");

  return (
    <div className="fixed top-0 left-0 bottom-0 w-[100px] border-r border-r-slate-700 h-screen flex flex-col">
      <img src="/dark_logo.png" className="w-100" />
      <div className="flex flex-col gap-8 my-8">
        {NavigationItems.map((item) => {
          return (
            <div
              onClick={() => setActiveNav(item.id)}
              className="flex flex-col text-white justify-center items-center cursor-pointer gap-4"
            >
              <div
                className={clsx(
                  "rounded-3xl py-2 w-[60px]  flex items-center justify-center transition-colors ease-out duration-300",
                  activeNav === item.id && "bg-slate-400 text-slate-900",
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
