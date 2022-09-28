import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { UserDTO } from "../../dtos/user";
import { IUsersRepository } from "../../repositories/IUsersRepository";

type User = {
  email: string;
  name: string;
  username: string;
};

interface AuthenticateUserResponse {
  user: User;
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    email,
    password,
  }: Pick<
    UserDTO.CreateUser,
    "email" | "password"
  >): Promise<AuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email or password incorrect");

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Email or password incorrect");

    const token = sign({}, "d3aa349c8d932ea71f11aa096ba29f61", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user,
      token,
    };
  }
}
