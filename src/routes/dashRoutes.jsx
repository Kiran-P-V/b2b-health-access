// const Test = Loadable(lazy(() => import("views/Test")));

import Login from "../views/AuthPages/Login";
import PatientList from "../views/PatientList";

const DashRoutes = () => {
  return {
    path: "/dash",
    // element: <FullWidthLayout />,
    children: [
      {
        path: "/dash/login",
        element: <Login />,
      },
      {
        path: "/dash/patient-list",
        element: <PatientList />,
      },
    ],
  };
};

export default DashRoutes;
