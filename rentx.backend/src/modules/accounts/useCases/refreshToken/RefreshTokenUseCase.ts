import { verify, sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { AppError } from "@shared/errors/AppError";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface Payload {
  sub: string;
  email: string;
}

@injectable()
export class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,

    @inject("DayJSDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute(token: string) {
    const { sub, email } = verify(
      token,
      process.env.SERVER_JWT_REFRESH_TOKEN_SECRET
    ) as Payload;

    const userId = sub;

    const userToken =
      await this.usersTokensRepository.findByUserIdAndRefreshToken(
        userId,
        token
      );

    if (!userToken) throw new AppError("Refresh token does not exists");

    await this.usersTokensRepository.deleteById(userToken.id);

    const refreshToken = sign(
      { email },
      process.env.SERVER_JWT_REFRESH_TOKEN_SECRET,
      {
        subject: sub,
        expiresIn: "30d",
      }
    );

    const refreshTokenExpiresDays = 30;
    const refreshTokenExpiresDate = this.dateProvider.addDays(
      refreshTokenExpiresDays
    );

    await this.usersTokensRepository.create({
      expiresDate: refreshTokenExpiresDate,
      refreshToken,
      userId,
    });

    return refreshToken;
  }
}
