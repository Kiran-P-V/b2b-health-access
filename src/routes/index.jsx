import { useRoutes } from "react-router-dom";

// routes
import UserRoutes from "./userRoutes";
import DashRoutes from "./dashRoutes";
// import DashRoutes from "./dashRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([UserRoutes(), DashRoutes()]);
}
