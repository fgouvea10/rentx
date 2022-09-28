import { getRepository, Repository } from "typeorm";

import { UserDTO } from "../../dtos/user";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    password,
    driverLicense,
  }: UserDTO.CreateUser): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driverLicense,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }
}
