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
    UserDTO.User,
    "email" | "password"
  >): Promise<AuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email or password incorrect");

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Email or password incorrect");

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
