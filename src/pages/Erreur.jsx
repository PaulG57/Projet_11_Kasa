import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div className="error">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n’éxiste pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Erreur;
