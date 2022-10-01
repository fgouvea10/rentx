export namespace RentalProtocol {
  export interface CreateRental {
    userId: string;
    carId: string;
    expectedReturnDate: Date;
    id?: string;
    endDate?: Date;
    total?: number;
  }
}
