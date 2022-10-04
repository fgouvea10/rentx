import { client } from "~/services/client";
import { ListRentals } from "~/services/protocols/rentals/list-by-user";

// interface Response {

// }

export async function getRentalsByUser()/*: Promise<ListRentals.Response>*/ {
  const { data } = await client.get/*<ListRentals.Response>*/('/rentals/user');

  // const 

  return data;
}
