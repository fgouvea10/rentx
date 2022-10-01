import { UserDTO } from "../dtos/user";
import { User } from "../infra/typeorm/entities/User";

export interface IUsersRepository {
  create(user: UserDTO.User): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  findById(id: string): Promise<User>;
}
