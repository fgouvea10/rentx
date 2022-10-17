import {
  Routes as ReactRouterRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { DefaultLayout } from "../layouts/default-layout";

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/*" element={<DefaultLayout />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
