import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { UserDTO } from "../../dtos/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driverLicense,
  }: UserDTO.CreateUser): Promise<void> {
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      driverLicense,
    });
  }
}
