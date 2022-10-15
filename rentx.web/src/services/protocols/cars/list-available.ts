export namespace ListAvailableCars {
  export type Request = {
    brand?: string;
  };

  export type Response = {
    id: string;
    name: string;
    brand: string;
    price: number;
    categoryId: string;
  };
}
