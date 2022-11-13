import { client } from '~/services/client';
import { ListAvailableCars } from '~/services/protocols/cars/list-available';

interface Response {
  id: string;
  name: string;
  brand: string;
  dailyRate: number;
}

export async function listAvailableCars(): Promise<ListAvailableCars.Response[]> {
  const response = await client.get<Response[]>('/cars/available');

  const cars = response.data.map((car) => ({
    id: car.id,
    name: car.name,
    brand: car.brand,
    price: car.dailyRate.toString(),
  }));

  return cars;
}
