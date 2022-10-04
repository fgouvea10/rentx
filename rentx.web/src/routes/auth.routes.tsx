import { Route, Routes } from 'react-router-dom';

import { SignIn } from '~/pages/auth/signIn';

export function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
    </Routes>
  )
}