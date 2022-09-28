import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UserDTO } from "@modules/accounts/dtos/user";
import { AppError } from "@errors/AppError";

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
  }: UserDTO.User): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    const usernameAlreadyExists = await this.usersRepository.findByUsername(
      username
    );

    if (emailAlreadyExists) throw new AppError("Email already exists");

    if (usernameAlreadyExists) throw new AppError("Username already exists");

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
