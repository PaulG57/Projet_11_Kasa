import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import aboutBanner from "../assets/banner_about.png";

function About() {
  return (
    <div className="about">
      <Banner image={aboutBanner} />
      <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale..." />
      <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa..." />
      <Collapse title="Service" content="Nos équipes restent à votre disposition pour vous fournir une expérience parfaite..." />
      <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa..." />
    </div>
  );
}

export default About;
