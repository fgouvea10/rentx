import { AppFooter } from '~/components/layout/footers/dashboard';
import { AppHeader } from '~/components/layout/headers/Dashboard';
import { Dashboard } from '~/pages/dashboard/home';

export function DashboardLayout() {
  return (
    <>
      <AppHeader />
      <Dashboard />
      <AppFooter />
    </>
  );
}
