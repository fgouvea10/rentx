import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from '~/pages/dashboard/home';

import { PrivateRoute } from './private.route';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="session" element={<Navigate to="/session" replace />} />
      <Route index element={<PrivateRoute element={<Dashboard />} />} />
    </Routes>
  )
}