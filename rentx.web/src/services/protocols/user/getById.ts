export namespace GetUserById {
  export type Request = {
    id: string;
  }

  export type Response = {
    isAdmin: boolean;
    name: string;
    id: string;
    username: string;
    email: string;
    driverLicense: string;
  }
}
