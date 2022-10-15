import { client } from '~/services/client';
import { ListAvailableCars } from '~/services/protocols/cars/list-available';

interface Response {
  id: string;
  name: string;
  brand: string;
  dailyRate: string;
  categoryId: string;
}

export async function listAvailableCars({
  brand,
}: ListAvailableCars.Request): Promise<ListAvailableCars.Response[]> {
  const response = await client.get<Response[]>('/cars/available', {
    params: {
      brand,
    },
  });

  const cars = response.data.map((car) => ({
    id: car.id,
    name: car.name,
    brand: car.brand,
    price: car.dailyRate,
    categoryId: car.categoryId,
  }));

  return cars;
}
