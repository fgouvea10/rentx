import { client } from '../client';

interface Response {
  token: string;
  refreshToken: string;
  user: {
    name: string;
    username: string;
    email: string;
    id: string;
  };
}

export function authenticateUser(email: string, password: string) {
  const response = client.post<Response>('/auth/session', {
    email,
    password,
  });

  return response;
}
