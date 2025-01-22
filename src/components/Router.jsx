import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import About from "../pages/About";
import Erreur from "../pages/Erreur";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}

export default Router;