import { NavLink } from "react-router-dom";
import logoHeader from "../assets/Logo_header_desktop.svg";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo Kasa" />
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
