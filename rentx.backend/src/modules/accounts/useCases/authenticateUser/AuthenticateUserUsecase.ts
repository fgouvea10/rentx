import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UserDTO } from "@modules/accounts/dtos/user";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

type User = {
  id: string;
  email: string;
  name: string;
  username: string;
};

interface AuthenticateUserResponse {
  user: User;
  token: string;
  refreshToken: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,

    @inject("DayJSDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({
    email,
    password,
  }: Pick<
    UserDTO.User,
    "email" | "password"
  >): Promise<AuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user)
      throw new AppError(
        "Email or password incorrect",
        401,
        "invalid.credentials"
      );

    const doesPasswordMatch = await compare(password, user.password);

    if (!doesPasswordMatch)
      throw new AppError(
        "Email or password incorrect",
        401,
        "invalid.credentials"
      );

    const token = sign({}, process.env.SERVER_JWT_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    const refreshToken = sign(
      { email },
      process.env.SERVER_JWT_REFRESH_TOKEN_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    const refreshTokenExpiresDays = 30;
    const refreshTokenExpiresDate = this.dateProvider.addDays(
      refreshTokenExpiresDays
    );

    await this.usersTokensRepository.create({
      userId: user.id,
      refreshToken,
      expiresDate: refreshTokenExpiresDate,
    });

    const tokenResponse: AuthenticateUserResponse = {
      token,
      refreshToken,
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
        id: user.id,
      },
    };

    return tokenResponse;
  }
}
