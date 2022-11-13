import { client } from '~/services/client';

export async function getCarById(id: string) {
  const response = await client.get(`/cars/${id}`);

  return response.data;
}
