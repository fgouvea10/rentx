import { client } from '~/services/client';
import { ListRentals } from '~/services/protocols/rentals/list-by-user';

interface Response {
  car: {
    name: string;
    brand: string;
    dailyRate: number;
  };
}

export async function getRentalsByUser(): Promise<ListRentals.Response[]> {
  const response = await client.get<Response[]>('/rentals/user');

  const cars = response.data.map((item) => item.car);

  return cars.map((car) => ({
    name: car.name,
    brand: car.brand,
    price: car.dailyRate,
  }));
}
