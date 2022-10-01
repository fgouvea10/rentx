import { UserDTO } from "@modules/accounts/dtos/user";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    password,
    driverLicense,
  }: UserDTO.User): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      driverLicense,
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findByUsername(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
