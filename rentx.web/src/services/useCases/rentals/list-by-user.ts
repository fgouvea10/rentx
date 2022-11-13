import { client } from '~/services/client';
import { ListRentals } from '~/services/protocols/rentals/list-by-user';

interface Response {
  id: string;
  expectedReturnDate: string;
  car: {
    name: string;
    brand: string;
    dailyRate: number;
  };
}

export async function getRentalsByUser(): Promise<ListRentals.Response[]> {
  const response = await client.get<Response[]>('/rentals/user');

  return response.data.map(item => ({
    name: item.car.name,
    brand: item.car.brand,
    price: item.car.dailyRate.toString(),
    id: item.id,
    expectedReturnDate: item.expectedReturnDate,
  }))
}
