import { SITE_TITLE, NAV_LINKS } from "./constants/titles";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const NavBar: React.FC = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav className="flex border border-b lg:py-5 py-2 text-xl lg:px-10 px-5 flex-wrap">
      <div className="flex container flex-wrap items-center justify-between mx-auto">
        <Link to="/">{SITE_TITLE}</Link>

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
      </div>
      <div className="sm:hidden w-full">
        {navBarOpen ? <MenuOverlay navLinks={NAV_LINKS} /> : null}
      </div>
    </nav>
  );
};

export default NavBar;
