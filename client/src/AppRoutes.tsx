import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import { ROUTES } from "./constants/Route.constant";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <HomePage />
    ),
  },
  {
    path: ROUTES.ERROR,
    element: (
      <div>
        <h1>500 Error</h1>
      </div>
    ),
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
