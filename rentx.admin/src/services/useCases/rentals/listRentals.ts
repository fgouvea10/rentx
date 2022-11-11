import { client } from "../../../lib/axios";

const token = localStorage.getItem('token');

const config = {
  headers: { Authorization: `Bearer ${token?.toString()}` },
};

export async function listRentals() {
  const response = await client.get("/rentals", config);

  return response.data;
}
