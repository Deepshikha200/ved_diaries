import Header from "../Common/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Common/Footer/Footer";

const Layout = () => {
  const location = useLocation();

  let headerClass = "default-header"; // Default header class
  if (location.pathname === "/wedding") {
    headerClass = "wedding-header";
  } else if (location.pathname === "/pre-wedding") {
    headerClass = "pre-wedding-header";
  } else if (location.pathname === "/events") {
    headerClass = "events-header";
  }

  return (
    <>
      <Header headerClass={headerClass} />
      <main className="layout-outlet">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
