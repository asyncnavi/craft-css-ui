import {
  IconHome,
  IconMilitaryAward,
  IconSchool,
  IconSwords,
  IconTarget,
  IconChevronRight,
  IconChevronLeft,
  IconUser,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

const navigationItems = [
  { id: "nav-home", name: "Home", icon: <IconHome size={24} />, path: "/" },
  { id: "nav-target", name: "Targets", icon: <IconTarget size={24} />, path: "/targets" },
  { id: "nav-battles", name: "Battles", icon: <IconSwords size={24} />, path: "/battles" },
  { id: "nav-leaderboard", name: "Leaderboard", icon: <IconMilitaryAward size={24} />, path: "/leaderboard" },
  { id: "nav-learn", name: "Learn CSS", icon: <IconSchool size={24} />, path: "/learn" },
  { id: "nav-profile", name: "Profile", icon: <IconUser size={24} />, path: "/profile" }
];

const NavigationRail = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("nav-home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const handlers = useSwipeable({
    onSwipedRight: () => setIsOpen(true),
    onSwipedLeft: () => setIsOpen(false),
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <>
      {isMobile && (
        <motion.div
          className="fixed left-0 z-50 -translate-y-1/2 top-1/2"
          initial={{ x: -20 }}
          animate={{ x: isOpen ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={toggleMenu}
            className="flex items-center justify-end w-10 h-20 pr-2 text-white bg-indigo-500 rounded-r-full"
            whileHover={{ width: 48 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <IconChevronLeft size={24} /> : <IconChevronRight size={24} />}
          </motion.button>
        </motion.div>
      )}
      <motion.nav
        {...handlers}
        initial={isMobile ? "closed" : "open"}
        animate={isMobile ? (isOpen ? "open" : "closed") : "open"}
        variants={navVariants}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 bottom-0 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-6 space-y-8 shadow-lg ${
          isMobile ? "w-64" : "w-20"
        } z-40`}
      >
        <motion.img
          src="/dark_logo.png"
          alt="Logo"
          className="w-24 h-24"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
       {navigationItems.map((item) => (
  <motion.div
    key={item.id}
    className="relative w-full"
    onHoverStart={() => setHoveredNav(item.id)}
    onHoverEnd={() => setHoveredNav(null)}
  >
    <motion.button
      onClick={() => {
        setActiveNav(item.id);
        if (isMobile) setIsOpen(false);
        navigate(item.path);
      }}
      className={`w-full h-14 flex items-center justify-center ${
        isMobile ? "justify-start px-6" : ""
      } rounded-xl transition-all duration-300 ${
        activeNav === item.id
          ? "bg-indigo-500 text-white shadow-lg"
          : item.id !== "nav-home"
          ? "text-gray-400 hover:bg-indigo-500 hover:text-white"
          : "text-gray-400 hover:text-white"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={item.name}
    >
      {item.icon}
      {isMobile && <span className="ml-4">{item.name}</span>}
    </motion.button>
            {!isMobile && (
              <AnimatePresence>
                {hoveredNav === item.id && (
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute px-2 py-1 ml-2 text-xs text-white bg-gray-800 rounded left-full whitespace-nowrap"
                    style={{ pointerEvents: "none" }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            )}
            {activeNav === item.id && (
              <motion.div
                layoutId="activeIndicator"
                className={`absolute ${isMobile ? "left-0" : "left-0 top-1/2"} w-1 ${isMobile ? "h-full" : "h-8"} bg-indigo-500 rounded-r-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={isMobile ? {} : { translateY: "-50%" }}
              />
            )}
          </motion.div>
        ))}
      </motion.nav>
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default NavigationRail;