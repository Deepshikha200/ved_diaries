import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Layout from "../Components/Layout/Layout";
import Wedding from "../Components/Pages/Wedding/Wedding";

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
          path: "/wedding",
          element: <Wedding />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
