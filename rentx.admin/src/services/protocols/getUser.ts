export namespace GetUser {
  export type Request = {
    token: string;
  };

  export type Response = {
    email: string;
    id: string;
    isAdmin: boolean;
    name: string;
    username: string;
  };
}
