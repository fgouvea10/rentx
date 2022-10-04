import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from '~/pages/dashboard/home';
import { ReservationDetails } from '~/pages/dashboard/reservations/details';
import { ReservationsList } from '~/pages/dashboard/reservations/list';

import { PrivateRoute } from './private.route';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="session" element={<Navigate to="/session" replace />} />
      <Route index element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="reservas">
        <Route
          index
          element={<PrivateRoute element={<ReservationsList />} />}
        />
        <Route
          path=":id"
          element={<PrivateRoute element={<ReservationDetails />} />}
        />
      </Route>
    </Routes>
  );
}
