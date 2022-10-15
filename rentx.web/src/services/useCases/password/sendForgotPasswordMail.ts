import { client } from '../../client';
import { Authentication } from '../../protocols/password/sendForgotPasswordMail';

export async function sendForgotPasswordMail({ email }: Authentication.Request) {
  const response = await client.post<void>('/password/forgot', {
    email,
  });

  return response;
}
