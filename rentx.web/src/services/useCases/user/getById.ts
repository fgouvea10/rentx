import { client } from '~/services/client';
import { GetUserById } from '~/services/protocols/user/getById';

type Response = GetUserById.Response;

export async function getUserById({
  id,
}: GetUserById.Request): Promise<GetUserById.Response> {
  const response = await client.get<Response>(`/users/${id}`);

  return response.data;
}
