import {
  Routes as ReactRouterRoutes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import { AuthLayout } from '~/layouts/auth-layout';
import { DashboardLayout } from '~/layouts/dashboard-layout';
import { HeroLayout } from '~/layouts/hero-layout';

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/" element={<HeroLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
