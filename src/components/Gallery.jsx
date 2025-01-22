import logements from "../data/logements.json";
import Card from "./Card";

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </section>
  );
}

export default Gallery;
