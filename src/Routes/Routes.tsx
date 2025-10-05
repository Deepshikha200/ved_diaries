import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Components/Layout/Layout";

// Lazy-loaded components
const Home = lazy(() => import("../Components/Pages/Home/Home"));
const ContactUs = lazy(() => import("../Components/Pages/ContactUs/ContactUs"));
const Wedding = lazy(() => import("../Components/Pages/Wedding/Wedding"));
const PreWedding = lazy(
  () => import("../Components/Pages/PreWedding/PreWedding")
);
const Events = lazy(() => import("../Components/Pages/Home/Events/Events"));

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/wedding",
          element: <Wedding />,
        },
        {
          path: "/pre-wedding",
          element: <PreWedding />,
        },
        {
          path: "/events",
          element: <Events />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
