import { UserDTO } from "../dtos/user";

export interface IUsersRepository {
  create(user: UserDTO.CreateUser): Promise<void>;
}
