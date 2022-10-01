export namespace UserDTO {
  export interface User {
    id?: string;
    name: string;
    username: string;
    email: string;
    password: string;
    driverLicense: string;
    avatar?: string;
  }

  export interface CreateUserToken {
    userId: string;
    expiresDate: Date;
    refreshToken: string;
  }
}
