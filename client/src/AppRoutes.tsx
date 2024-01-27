import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ErrorPage from './pages/Error/Error';
import { ROUTES } from './constants/Route.constant';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <HomePage />
    ),
  },
  {
    path: ROUTES.ERROR,
    element: <ErrorPage />,
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
