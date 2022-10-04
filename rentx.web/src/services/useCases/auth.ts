import { client } from '../client';
import { Authentication } from '../protocols/auth';

export async function authenticateUser({ email, password }: Authentication.Request) {
  const response = await client.post<Authentication.Response>('/auth/session', {
    email,
    password,
  });

  return response;
}
