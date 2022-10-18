import {
  Routes as ReactRouterRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { DefaultLayout } from "../layouts/default-layout";
import { Redirect } from "../pages/redirect";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/*" element={<DefaultLayout />} />
        <Route path="/redirect" element={<Redirect />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
