import { client } from '~/services/client';

export async function getCarsBySearch(name: string) {
  const response = await client.get('/cars/available', {
    params: {
      name,
    },
  });

  return response.data;
}
