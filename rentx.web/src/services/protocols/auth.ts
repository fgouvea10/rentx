export namespace Authentication {
  export interface Request {
    email: string;
    password: string;
  }

  export interface Response {
    token: string;
    refreshToken: string;
    user: {
      name: string;
      username: string;
      email: string;
      id: string;
    };
  }
}