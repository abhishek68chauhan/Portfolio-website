import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Education", path: "/education" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container navbar">

        <Link
          to="/"
          className="logo"
          onClick={() => setOpen(false)}
        >
          <span>AC</span>
          {profile.name}
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav open" : "nav"}>

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/resume"
            className="resume-button"
            onClick={() => setOpen(false)}
          >
            <Download size={16} />
            Resume
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;
