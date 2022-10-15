import { client } from '~/services/client';
import { ListAvailableCars } from '~/services/protocols/cars/list-available';

interface Response {
  id: string;
  name: string;
  brand: string;
  dailyRate: number;
  categoryId: string;
}

export async function listAvailableCars(
  brand?: string,
): Promise<ListAvailableCars.Response[]> {
  const response = await client.get<Response[]>('/cars/available', {
    params: {
      brand,
    },
  });

  const cars = response.data.map((car) => ({
    id: car.id,
    name: car.name,
    brand: car.brand,
    price: Number(car.dailyRate),
    categoryId: car.categoryId,
  }));

  console.log('where eveyrthing befin', cars);

  return cars;
}
