import logoHeader from "../assets/Logo_header_desktop.svg";

function Header() {
    return (
      <header>
        <img src={logoHeader} alt="Logo Kasa" />
        <nav>
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  