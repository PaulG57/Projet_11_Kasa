import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeBanner from "../assets/banner_home.png";

function Home() {
  return (
    <div>
      <Banner image={homeBanner} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
