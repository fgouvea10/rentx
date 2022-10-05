import { Navigate, Route, Routes } from 'react-router-dom';
import { ListCars } from '~/pages/dashboard/cars/list';

import { Dashboard } from '~/pages/dashboard/home';
import { Profile } from '~/pages/dashboard/profile';
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
      <Route path="carros">
        <Route index element={<PrivateRoute element={<ListCars />} />} />
      </Route>
      <Route path="profile" element={<PrivateRoute element={<Profile />} />} />
    </Routes>
  );
}
