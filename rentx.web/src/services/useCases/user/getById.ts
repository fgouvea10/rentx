import { client } from '~/services/client';

export async function getUserById(id: string) {
  const response = await client.get(`/users/${id}`);

  return response.data;
}
