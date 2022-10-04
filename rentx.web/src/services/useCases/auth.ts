import { client } from '../client';
import { Authentication } from '../protocols/auth';

export function authenticateUser({ email, password }: Authentication.Request) {
  const response = client.post<Authentication.Response>('/auth/session', {
    email,
    password,
  });

  return response;
}
