import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";

interface JWTPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  const usersTokensRepository = new UsersTokensRepository();

  if (!authHeader) throw new AppError("Token is missing", 401, "missing.token");

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      process.env.SERVER_JWT_REFRESH_TOKEN_SECRET
    ) as JWTPayload;

    const user = usersTokensRepository.findByUserIdAndRefreshToken(
      user_id,
      token
    );

    if (!user) throw new AppError("User does not exists", 404, "not.found");

    request.user = {
      id: user_id,
    };

    next();
  } catch (error) {
    throw new AppError("Invalid token", 498, "invalid.token");
  }
}
