import React from "react";
import { Link } from "react-router-dom";

interface MenuOverlayProps {
  navLinks: { path: string; title: string }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ navLinks }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            className="flex py-2 pl-3 pr-4 border border-transparent"
            to={link.path}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
