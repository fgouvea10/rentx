import { UserDTO } from "../dtos/user";
import { UserTokens } from "../infra/typeorm/entities/UserTokens";

export interface IUsersTokensRepository {
  create({
    expiresDate,
    refreshToken,
    userId,
  }: UserDTO.CreateUserToken): Promise<UserTokens>;
}
