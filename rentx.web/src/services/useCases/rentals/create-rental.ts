import { client } from '~/services/client';

type CreateRentalRequest = {
  expectedReturnDate: string;
  carId: string;
};

export async function createRental(data: CreateRentalRequest) {
  const response = await client.post('/rentals', {
    data,
  });

  return response.data;
}
