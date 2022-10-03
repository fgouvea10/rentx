import { AppFooter } from '~/components/layout/footers/dashboard';
import { AppHeader } from '~/components/layout/headers/Dashboard';
import { Dashboard } from '~/pages/dashboard/home';
import { ReservationsList } from '~/pages/dashboard/reservations/list';

export function DashboardLayout() {
  return (
    <>
      <AppHeader />
      <ReservationsList />
      <AppFooter />
    </>
  );
}
