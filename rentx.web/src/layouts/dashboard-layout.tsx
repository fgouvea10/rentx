import { AppFooter } from '~/components/layout/footers/dashboard';
import { AppHeader } from '~/components/layout/headers/Dashboard';
import { AppRoutes } from '~/routes/dashboard.routes';

export function DashboardLayout() {
  return (
    <>
      <AppHeader />
      <AppRoutes />
      <AppFooter />
    </>
  );
}
