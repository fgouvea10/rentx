import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserDTO } from "@modules/accounts/dtos/user";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

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
    UserDTO.User,
    "email" | "password"
  >): Promise<AuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("Email or password incorrect", 401);

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) throw new AppError("Email or password incorrect", 401);

    const token = sign({}, process.env.SERVER_JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenResponse: AuthenticateUserResponse = {
      token,
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
      },
    };

    return tokenResponse;
  }
}
