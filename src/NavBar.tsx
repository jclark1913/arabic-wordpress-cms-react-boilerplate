import { SITE_TITLE, NAV_LINKS } from "./constants/titles";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between border border-b py-5 text-xl">
      <div className="">
        <Link to="/">{SITE_TITLE}</Link>
      </div>
      <div className="flex gap-10">
        {NAV_LINKS.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
