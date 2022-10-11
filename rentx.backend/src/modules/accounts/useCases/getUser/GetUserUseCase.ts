import { inject, injectable } from "tsyringe";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
export class GetUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);
    const {
      username,
      avatar,
      isAdmin,
      name,
      email,
      id: userId,
      driverLicense,
      createdAt,
    } = user;

    const newUser = {
      username,
      avatar,
      isAdmin,
      name,
      email,
      userId,
      driverLicense,
      createdAt,
    };

    return user;
  }
}
