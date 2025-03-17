import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Layout from "../Components/Layout/Layout";
import Wedding from "../Components/Pages/Wedding/Wedding";
import PreWedding from "../Components/Pages/PreWedding/PreWedding";

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
        {
          path:"/pre-wedding",
          element:<PreWedding/>
        }
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
