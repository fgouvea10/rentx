import { Route, Routes } from 'react-router-dom';

import { SignIn } from '~/pages/auth/signIn';
import { SignUp } from '~/pages/auth/signUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
    </Routes>
  )
}