import { getRepository, Repository } from "typeorm";

import { UserDTO } from "@modules/accounts/dtos/user";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { UserTokens } from "../entities/UserTokens";

export class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    expiresDate,
    refreshToken,
    userId,
  }: UserDTO.CreateUserToken): Promise<UserTokens> {
    const userToken = this.repository.create({
      expiresDate,
      refreshToken,
      userId,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}
