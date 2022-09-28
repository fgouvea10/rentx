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
}
