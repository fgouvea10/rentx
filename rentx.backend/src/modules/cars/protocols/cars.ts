import { Specification } from "../infra/typeorm/entities/Specification";

export namespace Car {
  export interface Create {
    name: string;
    description: string;
    dailyRate: number;
    licensePlate: string;
    fineAmount: number;
    brand: string;
    categoryId: string;
    specifications?: Specification[];
    id?: string;
  }
}
