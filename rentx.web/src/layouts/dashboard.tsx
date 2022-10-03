import { AppFooter } from '~/components/layout/footers/dashboard';
import { AppHeader } from '~/components/layout/headers/Dashboard';
import { Dashboard } from '~/pages/dashboard/home';
import { ReservationDetails } from '~/pages/dashboard/reservations/details';
import { ReservationsList } from '~/pages/dashboard/reservations/list';

export function DashboardLayout() {
  return (
    <>
      <AppHeader />
      <ReservationDetails />
      <AppFooter />
    </>
  );
}
