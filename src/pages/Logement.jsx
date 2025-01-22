import { useParams } from "react-router-dom";
import logements from "../data/logements.json";

function Logement() {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL

  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant à l'ID

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <h1>Page du logement {id}</h1>
      <p> {logement.title}</p>
    </div>
  );
}

export default Logement;
