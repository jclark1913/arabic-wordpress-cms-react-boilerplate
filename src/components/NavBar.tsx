import { SITE_TITLE, NAV_LINKS } from "../constants/titles";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "../ThemeContext";

const NavBar: React.FC = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex border-b lg:py-5 py-2 text-2xl lg:px-10 px-5 flex-wrap text-primarytext border-normalborder mb-10">
      <div className="flex container flex-wrap items-center justify-between mx-auto">
        <Link to="/">{SITE_TITLE}</Link>
        <div className="flex gap-5">
          <div className="sm:hidden flex align-middle">
            {!navBarOpen ? (
              <button
                className="flex items-center align-middle"
                onClick={() => setNavBarOpen(true)}
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                className="flex items-center align-middle"
                onClick={() => setNavBarOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="hidden sm:flex gap-10">
            {NAV_LINKS.map((link, index) => (
              <Link key={index} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>

          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <MoonIcon className="text-primarytext h-6 w-6" />
            ) : (
              <SunIcon className="text-primarytext hover:text-black h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className="sm:hidden w-full">
        {navBarOpen ? <MenuOverlay navLinks={NAV_LINKS} /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
