// const Test = Loadable(lazy(() => import("views/Test")));

import UserLayout from "../layouts/UserLayout";
import LandingPage from "../views/LandingPage";

const UserRoutes = () => {
  return {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  };
};

export default UserRoutes;
