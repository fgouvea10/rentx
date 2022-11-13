export namespace ListAvailableCars {
  export type Request = {
    name?: string;
  };

  export type Response = {
    id: string;
    name: string;
    brand: string;
    price: string;
  };
}
