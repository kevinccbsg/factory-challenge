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
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
