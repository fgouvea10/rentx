import { Rental } from "../infra/typeorm/entities/Rental";
import { RentalProtocol } from "../protocols/rental";

export interface IRentalsRepository {
  create(data: RentalProtocol.CreateRental): Promise<Rental>;
  findOpenRentalByCar(carId: string): Promise<Rental>;
  findOpenRentalByUser(userId: string): Promise<Rental>;
  findById(id: string): Promise<Rental>;
  findRentalsByUserId(userId: string): Promise<Rental[]>
}
