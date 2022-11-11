import { client } from "../../../lib/axios";

const token = localStorage.getItem('token');

const config = {
  headers: { Authorization: `Bearer ${token?.toString()}` },
};

export async function getCarById(id: string) {
  const response = await client.get(`/cars/${id}`, config);

  return response.data;
}
