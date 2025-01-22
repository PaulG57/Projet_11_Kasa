import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="container">
        <Header />
        <Outlet />
      </div>
        <Footer />
    </div>
  );
}

export default Layout;
