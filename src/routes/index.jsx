import { BrowserRouter} from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes.jsx";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return(
    <BrowserRouter>
      <AdminRoutes/>
    </BrowserRouter>
  )
}