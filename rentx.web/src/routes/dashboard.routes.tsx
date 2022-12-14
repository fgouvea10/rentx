import { Navigate, Route, Routes } from 'react-router-dom';
import { CarDetails } from '~/pages/dashboard/cars/details';
import { ListCars } from '~/pages/dashboard/cars/list';

import { Dashboard } from '~/pages/dashboard/home';
import { Profile } from '~/pages/dashboard/profile';
import { RentalDatePicker } from '~/pages/dashboard/rental/rental-datepicker';
import { RentalLogin } from '~/pages/dashboard/rental/rental-login';
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
        <Route path=":id" element={<PrivateRoute element={<CarDetails />} />} />
      </Route>
      <Route path="alugar">
        <Route index element={<PrivateRoute element={<RentalLogin />} />} />
        <Route
          path="date"
          element={<PrivateRoute element={<RentalDatePicker />} />}
        />
      </Route>
      <Route path="perfil" element={<PrivateRoute element={<Profile />} />} />
    </Routes>
  );
}
