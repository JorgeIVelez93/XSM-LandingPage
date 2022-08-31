import react from "react";
import { Link } from "react-router-dom";
import nav from "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navLink" to="">
        Home
      </Link>
      <Link className="navLink" to="aboutUs">
        About XSM
      </Link>
    </nav>
  );
};

export default Navbar;
