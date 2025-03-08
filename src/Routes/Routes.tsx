import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // children: [
      //   {
      //     path: "/",
      //     element: <Home />,
      //   },
      // ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
