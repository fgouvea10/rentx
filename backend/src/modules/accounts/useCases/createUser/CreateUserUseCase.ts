import { inject } from "tsyringe";
import { UserDTO } from "../../dtos/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driverLicense,
    });
  }
}
