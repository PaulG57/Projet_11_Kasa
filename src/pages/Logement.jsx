import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";

function Logement() {
  const { id } = useParams(); // Récupère l'ID du logement depuis l'URL

  const logement = logements.find((logement) => logement.id === id); // Trouve le logement correspondant à l'ID

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="logement">
      <Slideshow images={logement.pictures} />

      <div className="logement-header">

        <div className="logement-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
              {logement.tags.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
        </div>

        <div className="host-info">

          <div className="host">
            <span>{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < logement.rating ? "filled" : ""}>★</span>
            ))}
          </div>
          
        </div>

      </div>

      <div className="logement-collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments.map((item, index) => <li key={index}>{item}</li>)} />
      </div>

    </div>
  );
}

export default Logement;
