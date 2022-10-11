import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { UserDTO } from "@modules/accounts/dtos/user";
import { AppError } from "@shared/errors/AppError";

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

    if (emailAlreadyExists)
      throw new AppError("Email already exists", 409, "bad.request");

    if (usernameAlreadyExists)
      throw new AppError("Username already exists", 409, "bad.request");

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
