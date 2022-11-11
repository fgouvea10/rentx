import { client } from "../../../lib/axios";

const token = localStorage.getItem('token');

const config = {
  headers: { Authorization: `Bearer ${token?.toString()}` },
};
export async function getUserById(id: string) {
  const response = await client.get(`/users/${id}`, config);

  console.log('response data', response);

  return response.data;
}