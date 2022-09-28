import { UserDTO } from "../dtos/user";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(user: UserDTO.User): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
}
