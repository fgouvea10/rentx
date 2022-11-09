import { client } from "../../lib/axios";
import { GetUser } from "../protocols/getUser";

interface Response extends GetUser.Response {}

export async function getUser({
  token,
}: GetUser.Request): Promise<GetUser.Response> {
  const response = await client.get<Response>("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const mappedData = {
    email: response.data.email,
    id: response.data.id,
    isAdmin: response.data.isAdmin,
    name: response.data.name,
    username: response.data.username,
  };

  return mappedData;
}
