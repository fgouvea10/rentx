import { Route, Routes } from 'react-router-dom';
import { ResetPassword } from '~/pages/auth/resetPassword';
import { SendForgotPasswordMail } from '~/pages/auth/sendForgotPasswordMail';

import { SignIn } from '~/pages/auth/signIn';
import { SignUp } from '~/pages/auth/signUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="register" element={<SignUp />} />
      <Route path="forgot-password" element={<SendForgotPasswordMail />} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
